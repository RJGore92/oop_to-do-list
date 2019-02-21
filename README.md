# Epicodus Unit 4.1: Object-Oriented Programming: To-Do List

#### Start Date: 2/15/2019, First finalization date: 2/21/2019

#### By **Robert James "Jimmy" Gore**

## Description

The primary purpose of this assignment project is to demonstrate further knowledge of object-oriented programming basics and some measure of advanced user interface scripting with jQuery and JavaScript on top of HTML and CSS.  The project behaves by allowing a user to enter a primary task and then a number of subtasks, one minimum required and a maximum allowed up to five, and upon submitting the tasks to the page, it creates a card about the task.  From there, the user can use this as a reminder and virtual check-off box for any tasks and subtasks they perform and complete, and can remove tasks once completed or when an override checkbox is checked if the task is no longer relevant to what they are needing to work on.  Further details about the program's behavior will be listed below.

## Setup/Installation Requirements

* Install Git Bash for Git repository cloning of the project
* Install Atom for review and edit of Code
* To access repository for project and review code, first clone repository at the appropriate link, then use Git Bash and/or Atom to open the project folder.
* GitHub (repository/pages) link is (Link here)

## Known Bugs

No known bugs are present in this project.

## Assignment Specs

The user is given a form to assign themselves tasks with and must fill out the first two inputs of the form.  The form is rejected if either one of the first two inputs is empty.

The form, upon submission, presents a card to the user with a number of checkboxes in the card body equal to the number of subtasks filled out, each checkbox having their respective subtasks listed beside them.

The card header displays the primary task objective, two buttons, and a checkbox.  The first of the two buttons, when clicked, will evaluate the subtasks to see if all of them are completed and checked.  If this is the case, the primary task gets labeled as completed.  If not, the page alerts the user saying that not every subtask is completed yet.

The second button manages deletion and removal of the task from the UI and the Task List variable.  It checks to see if the state of the primary task is completed fully after confirmation from the first button.  Alternatively, it also checks to see if the checkbox to override deletion priority of the respective card for the task is completed.  If either are true, then the task is deleted from the UI and Task List object.  If neither are true, the task remains and the page alerts the user telling them the task isn't completed.

The form is set for repeated use, allowing multiple tasks to be displayed and used on the UI at any one time.


####  Inputs and outputs (examples):

| User Input Scenario                                                                            | Expected Result                                                                      |
| :--------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------- |
|  User leaves primary task and first subtask empty.                                             | Page does not submit form, alerts user to fill out required form inputs.             |
|  User inputs all form inputs or required and mixed subtasks.                                   | Page filters out empty subtasks, displays task and subtasks in card.                 |
|  User tries to click on button to confirm completion without all subtasks checked.             | Page alerts user, informing them that not all subtasks have been completed.          |
|  User clicks button to confirm completion after all subtasks checked.                          | Card header is modified, putting a completed mark next to button's respective task.  |
|  User tries to click delete task button without task being completed and override not checked. | Task is not removed, page alerts user claiming task is not completed.                |
|  User clicks button after task labeled as completed, or after override is checked.             | Page deletes task from UI and internal task list variable.                           |

## Technologies Used

* Git Bash
* Atom
* HTML
* MD
* CSS
* Bootstrap
* JavaScript
* jQuery

### License

Copyright (c) 2019 **Robert James "Jimmy" Gore**
