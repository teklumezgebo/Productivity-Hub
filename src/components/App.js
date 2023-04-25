import React, { useState } from 'react';
import NavBar from "./NavBar";
import TaskForm from "./To-Do-List/TaskForm";
import TaskList from "./To-Do-List/TaskList";
import Task from './To-Do-List/Task';
import JournalForm from './Journals/JournalForm'
import JournalList from './Journals/JournalList'

function App() {
  const [list, setList] = useState([])
  const [taskName, setTaskName] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [journalList, setJournalList] = useState([])
  const [entry, setEntry] = useState('')

  function handleListChange(newTask) {
    setList(newTask)
  }

  function handleJournalChange(newJournal) {
    setJournalList(newJournal)
  }

  function handleNewTask(newTask) {
    setList([...list, newTask])
  }

  function handleTaskNameChange(event) {
    setTaskName(event.target.value)
  }

  function handleDueDateChange(event) {
    setDueDate(event.target.value)
  }

  function handleEntry(event) {
    setEntry(event.target.value)
  }

  function handleNewEntry(newEntry) {
    setJournalList([...journalList, newEntry])
  }

  function filterList(id) {
    fetch('http://localhost:3000/tasks')
    .then(res => res.json())
    .then(tasks => {
      const filteredList = tasks.filter((task) => task.id !== id)
      const displayFilteredList = filteredList.map((task) => {
        return (<Task 
          key={task.id} 
          id={task.id} 
          task={task.task} 
          dueDate={task.due} 
          onDelete={handleDelete}
          />)
      })
      setList(displayFilteredList)
    })

  }

  function handleDelete(id) {
    fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(() => filterList(id))
  }

  return (
    <div>
      <NavBar />
      <br></br>
      <TaskForm taskName={taskName} dueDate={dueDate} onNewTask={handleNewTask} onTaskNameChange={handleTaskNameChange} onDueDateChange={handleDueDateChange} onDelete={handleDelete}/>
      <TaskList list={list} onListChange={handleListChange} onDelete={handleDelete}/>
      <br></br>
      <JournalForm onEntryChange={handleEntry} entry={entry} onNewEntry={handleNewEntry} setEntry={setEntry}/>
      <JournalList journalList={journalList} onJournalChange={handleJournalChange}/>
    </div>
  )
}

export default App;
