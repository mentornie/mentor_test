import React from "react";
import './Introduction.css';
import mentor_logo from './../../assets/mentor_icon.png';
const Introduction = () => {
  return (
    <div >
    <div style={{display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',flexDirection:'column'}}>
      <h1 className="header">Introduction</h1>
      <img src={mentor_logo} alt="Logo" />
      </div>
      <h2 style={{marginRight:'20%', marginLeft:'20%', fontSize:'2rem', textAlign:'justify', fontWeight:'normal', }}>Welcome to the MENTOR application! This application aims to enhance the learning experience of 
      NIE students through the use of remote peer tutoring. The application has two modes: 
      <br/><br/>1. Find a tutor
      <br/>2. Classroom Discussion
      <br/>
      </h2>
    <h3 style={{marginRight:'20%', marginLeft:'20%', fontSize:'4rem', textAlign:'justify', fontWeight:'normal'}}><u>Find A Tutor</u></h3>
    <h2 style={{marginRight:'20%', marginLeft:'20%', fontSize:'2rem', textAlign:'justify', fontWeight:'normal'}}>
    This mode provides a platform for students tutees to create an appointment with assigned student tutors. 
    Functionalities of the mode includes the following: <br/>
    <br/>1. Booking of tutoring session
    <br/>2. View all bookings made
    <br/>3. Dashboard of all bookings upcoming, pending and completed
    <br/>4. Notifications for bookings
    <br/>5. Chatting functionality after booking made
    <br/>6. Use of canvas to illustrate workings and ideas
    <br/>7. Creating availability for mentoring session (tutors)
    <br/>8. Acceptance of booking made by tutees (tutors)
    <br/><br/>
    Through peer tutoring, students can help each other. The tutees can learn more from tutors while the tutors can
    revise what is taught.
      </h2>
      <h3 style={{marginRight:'20%', marginLeft:'20%', fontSize:'4rem', textAlign:'justify', fontWeight:'normal'}}><u>Classroom Discussion</u></h3>
      <h2 style={{marginRight:'20%', marginLeft:'20%', fontSize:'2rem', textAlign:'justify', fontWeight:'normal'}}>
    This mode provides a platform for students discuss and ask more about the learning materials taught after every lesson. 
    Functionalities of the mode includes the following: <br/>
    <br/>1. Answer forum reflection questions posed by teachers
    <br/>2. View all reflections made by students
    <br/>3. Comment on reflections made by students 
    <br/>4. Sort reflections by recency and number of comments
    <br/>5. Chatting functionality among classmates
    <br/>6. Use of canvas to illustrate workings and ideas
    <br/><br/>
    Through classroom discussion, students reflect on the lessons learnt during class through guiding questions made by the teachers. Students
    can be revise what is taught by looking at reflections from past lessons. When unsure, they can also ask each other through the chat, facilitating active learning.<br/><br/><br/>
    </h2>
    </div>
  );
};

export default Introduction;