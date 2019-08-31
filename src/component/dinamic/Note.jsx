import React from 'react';

class Note extends React.Component{
  constructor(props){
    super(props);
    this.state ={};
  }
  componentWillMount(){
    //Esto se ejecuta antes que el elemento se monte en el dom
    this.setState({
      notes : [{
        title : "Ciclos de un componente en react",
        body_note : "Aqui un pequenio ejemplo de ciclos de un componente",
        link : "https://kashdkjahsdkjashdkj.chakjdhkjasdhjk"
      },{
        title : "CNA1 Topologia de redes",
        body_note : "Aqui algo de contenido de redes",
        link : "https://kashdkjahsdkjashdkj.chakjdhkjasdhjk"
      },{
        title : "Programacion en Javascript",
        body_note : "Algo de programacion funcional de JavaScript",
        link : "https://kashdkjahsdkjashdkj.chakjdhkjasdhjk"
      },{
        title : "Programacion en java",
        body_note : "Herencia multiple",
        link : "https://kashdkjahsdkjashdkj.chakjdhkjasdhjk"
      }],
      tipo : "notas comunes",
    })
  }
  render (){
    const noteList = this.state.notes;
    /*Notes.forEach((element)=>{
      console.log(element);
    });*/
    const Notes = noteList.map((element)=>{
       return (
         <div className="card blue-grey darken-1">
           <div className="card-content white-text">
             <span className="card-title">{element.title}</span>
             <p>{element.body_note}</p>
             <a href={element.link}>{element.link}</a>
           </div>
           <div className="card-action">
             <a href="#">borrar</a>
             <a href="#">updatear</a>
           </div>
         </div>
       );
    });

    console.log(Notes);

  return (
    <div className="contentNote">
      {Notes}
    </div>
  );

  }
}

export default Note;
