import React from 'react';

const BooksForm = (props) => {
  return (
    <div className="container">
    <div className={props.buttonName ==='Update' ? "panel panel-info":"panel panel-primary"}>
     <div className="panel-heading text-center">Book Form</div>
     <div className="panel-body">
    <form className="form-horizontal" onSubmit={props.handleSubmit}>
      <div className="form-group">
        <label  className="col-md-2 control-label">ID</label>
        <div className="col-md-4">
            <input type="text" className="form-control"  name="id" id="id" required disabled={props.buttonName ==='Update'} value={props.id} onChange={props.handleChange} placeholder="ID"/>
        </div>
      </div>
      <div className="form-group">
        <label  className="col-md-2 control-label">Title</label>
        <div className="col-md-10">
            <input type="text" className="form-control" name="title"  id="title"  value={props.title} onChange={props.handleChange} placeholder="Title"/>
        </div>
      </div>
      <div className="form-group">
        <label  className="col-md-2 control-label">Authors</label>
        <div className="col-md-4">
            <input type="text" className="form-control" name="name" id="name" value={props.name} onChange={props.handleChange} placeholder="Name"/>
        </div>
        <div className="col-md-3">
            <input type="text" className="form-control" name="birthYear" id="birthYear" value={props.birthYear}  onChange={props.handleChange} placeholder="Birth Year"/>
        </div>
        <div className="col-md-3">
            <input type="text" className="form-control" name="deathYear" id="deathYear" value={props.deathYear}  onChange={props.handleChange} placeholder="Death Year"/>
        </div>
      </div>
      <div className="form-group">
        <label  className="col-md-2 control-label">Bookshelves</label>
        <div className="col-md-5">
            <input type="text" className="form-control" id="shelves1" name="shelves1" value={props.shelves1}  onChange={props.handleChange} placeholder="Shelves1"/>
        </div>
        <div className="col-md-5">
            <input type="text" className="form-control" id="shelves2" name="shelves2" value={props.shelves2}  onChange={props.handleChange} placeholder="Shelves2"/>
        </div>
      </div>
      <div className="form-group">
        <label  className="col-md-2 control-label">Download Count</label>
        <div className="col-md-4">
            <input type="text" className="form-control" name="downloadCount" id="downloadCount" value={props.downloadCount} onChange={props.handleChange} placeholder="Download Count"/>
        </div>
        <label  className="col-md-2 control-label">Languages</label>
        <div className="col-md-4">
            <input type="text" className="form-control" name="languages" id="languages" value={props.languages}  onChange={props.handleChange} placeholder="languages"/>
        </div>
      </div>
      <div className="form-group">
        <label  className="col-md-2 control-label">media_type</label>
        <div className="col-md-4">
            <input type="text" className="form-control" id="mediaType" name="mediaType" value={props.mediaType}  onChange={props.handleChange} placeholder="media_type"/>
        </div>
        <label  className="col-md-2 control-label">Subjects</label>
        <div className="col-md-4">
            <input type="text" className="form-control" id="subjects" name="subjects" value={props.subjects} onChange={props.handleChange} placeholder="Subjects"/>
        </div>
      </div>
      <div className="form-group">
        <label  className="col-md-2 control-label">Formats</label>
        <div className="col-md-10">
            <input type="text" className="form-control" id="formats1" name="formats1" value={props.formats1} onChange={props.handleChange} placeholder="Formats1"/>
        </div>
        <div className="col-md-offset-2 col-md-10">
            <input type="text" className="form-control" id="formats2" name="formats2" value={props.formats2} onChange={props.handleChange}  placeholder="Formats2"/>
        </div>
        <div className="col-md-offset-2 col-md-10">
            <input type="text" className="form-control" id="formats3" name="formats3" value={props.formats3} onChange={props.handleChange} placeholder="Formats3"/>
        </div>
        <div className="col-md-offset-2 col-md-10">
            <input type="text" className="form-control" id="formats4" name="formats4" value={props.formats4} onChange={props.handleChange} placeholder="Formats4"/>
        </div>
        <div className="col-md-offset-2 col-md-10">
            <input type="text" className="form-control" id="formats5" name="formats5" value={props.formats5} onChange={props.handleChange} placeholder="Formats5"/>
        </div>
        <div className="col-md-offset-2 col-md-10">
            <input type="text" className="form-control" id="formats6" name="formats6" value={props.formats6} onChange={props.handleChange} placeholder="Formats6"/>
        </div>
        <div className="col-md-offset-2 col-md-10">
            <input type="text" className="form-control" id="formats7" name="formats7" value={props.formats7} onChange={props.handleChange} placeholder="Formats7"/>
        </div>
      </div>
      <div className="form-group">
      <div className="col-md-offset-2 col-md-10">
        <div className="col-md-6">
        <button type="button" className="btn btn-default" onClick={()=>props.history.push('/')}>Back</button>
        </div>
        <button type="submit" value="Submit" className= {props.buttonName ==='Update' ? "btn btn-info" : "btn btn-primary"}>{props.buttonName}</button>
      </div>
      </div>
    </form>
    </div>
       </div>
    </div>
  );
}
export default BooksForm;
