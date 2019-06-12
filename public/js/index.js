let k=document.querySelector("main").getAttribute("key");
let notes_section=document.querySelector("#notes");
function setNotes(){
    if(localStorage.getItem("notes")===null){
        
        localStorage.setItem("notes","[]");
    }
}
document.onload=(()=>{
    
         setNotes();
        displayNotes();
    
                     })();
function displayNotes(){
    setNotes();
    notes_section.innerHTML="";
    s="";
    let notes=JSON.parse(localStorage.getItem("notes"));
    for(let i=0;i<notes.length;i++){
        s+=`<form class="note" >
    <label>note title</label>
    <input type="text" value=${notes[i].title} required placeholder="note title">
    <label>note description</label>
    <textarea rows="5" columns="5" maxlength="105" required placeholder="note description">${notes[i].description}</textarea>
    <button  onClick="updateNote(this,event,${i})">save</button>
    <button onClick="deleteNote(event,${i})">delete</button>
    </form>`;
    
        
    }
    notes_section.innerHTML=s;
}

function addItem(self,e){
    
    e.preventDefault();
    setNotes()
    
    
    let form=self.form;
    let title=form.querySelector("input").value;
    let description=form.querySelector("textarea").value;
    let notes=JSON.parse(localStorage.getItem("notes"));
    let note={title:title,description:description};
    notes.push(note);
     localStorage.setItem("notes",JSON.stringify(notes));
    displayNotes();
}

function clearNotes(){
    localStorage.clear();
}

function updateNote(self,e,index){
    
    e.preventDefault();
    let form=self.form;
    let title=form.querySelector("input").value;
    let description=form.querySelector("textarea").value;
    let notes=JSON.parse(localStorage.getItem("notes"));
    notes[index].title=title;
    notes[index].description=description;
    localStorage.setItem("notes",JSON.stringify(notes));
    displayNotes();
}
function deleteNote(e,index){
    
    e.preventDefault();
    let notes=JSON.parse(localStorage.getItem("notes"));
    notes.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notes));
    displayNotes();
}