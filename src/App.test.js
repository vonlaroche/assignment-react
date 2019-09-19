import React from 'react';
import { create } from "react-test-renderer";
import ReactDOM from 'react-dom';
import App from './App';
import NoteListItem from "./Components/NoteListItem/NoteListItem";
import { tsExternalModuleReference, exportAllDeclaration } from '@babel/types';

const  notesToTest = { 
  validNote: "Proper note", 
  emptyNote: "", 
  tooLongNote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus ante metus, vel consectetur urna mollis ut. Fusce vel massa vestibulum, viverra sem eget, gravida lectus. Aliquam ac dui non.", 
  emojiNote: "😀😀😀"}
