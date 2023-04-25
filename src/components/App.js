import React, { useState } from 'react';
import NavBar from "./NavBar";
import TaskForm from "./To-Do-List/TaskForm";
import TaskList from "./To-Do-List/TaskList";
import Task from './To-Do-List/Task';
import JournalForm from './Journals/JournalForm'
import JournalList from './Journals/JournalList'
import Journal from './Journals/Journal';
import { Route, Switch } from 'react-router-dom'

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

  function handleDelete(id) {
    fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(() => filterList(id))
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

  function handleJournalDelete(id) {
    fetch(`http://localhost:3000/entries/${id}`,{
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(() => filterJournals())
  }

  function filterJournals(id) {
    fetch('http://localhost:3000/entries')
    .then(res => res.json())
    .then(journals => {
      const filteredJournal = journals.filter((journal) => journal.id !== id)
      const displayFitleredJournal = filteredJournal.map((journal) => {
        return (<Journal
          key={journal.id}
          id={journal.id}
          passage={journal.passage}
          onJournalDelete={handleJournalDelete}
        />)
      })
      setJournalList(displayFitleredJournal)
    })
  }

  return (
    <div>
      <NavBar />
      <br></br>
      <Switch>
        <Route path='/to-do-list'>
          <TaskForm taskName={taskName} dueDate={dueDate} onNewTask={handleNewTask} onTaskNameChange={handleTaskNameChange} onDueDateChange={handleDueDateChange} onDelete={handleDelete}/>
          <TaskList list={list} onListChange={handleListChange} onDelete={handleDelete}/>
        </Route>
        <Route path='/journal'>
          <JournalForm onEntryChange={handleEntry} entry={entry} onNewEntry={handleNewEntry} setEntry={setEntry} onJournalDelete={handleJournalDelete}/>
          <JournalList journalList={journalList} onJournalChange={handleJournalChange} onJournalDelete={handleJournalDelete}/>
        </Route>
      </Switch>
    </div>
  )
}

export default App;
