const React = require('react');

const ModalCreateForm = require('../MyModal/MyModalCreateForm')
const ModalAddWebsite = require('../MyModal/MyModalAddWebsite')

module.exports = function MySiteDiv( { formUniKey, site } ) {
    return (<div className='sitecontainer'>
    <h3>{site.title}1</h3>
    <a href={site.web}>{site.web}</a>
        <div className="secondcontainer">
          {site.Forms.map(form =>{
            return(
              <>
              <div>{form.name ? (<>{form.name}</>):(<>{'Без темы'}</>)}</div>
              <input type="text" value={form.configuration} className="myInput" style={{'display':'none'}}/>

            <div className="tooltip">
            <button onclick='myFunction()' onmouseout='outFunc()' className="myInputBtn">
            <span className="tooltiptext" id="myTooltip">Copy to clipboard</span>
        Copy HTML
            </button>
          </div>
          </>
            )
          })}
        <button data-modal-btn={`modal_create_form_${site.id}`} id="create-form-button"> create form {site.id} </button>
        <ModalCreateForm formUniKey={formUniKey} site={site}/>
</div>
<link rel="stylesheet" href="/css/UI/copyForm.css" />
<link rel="stylesheet" href="/css/UI/MyModal/MyModal.css" />
<script defer src="/js/formsJS/copyFormConfiguration.js" />
</div>

  
  
)};

{/* <div data-modal-window="modal_create_form" className="modal">
  <div className="modal_content">

    <div className="modal_inner">
      <div className="modal_title"> Модальное окно</div>
      <div className="close_modal_window">&times;</div>
    </div>

    <input placeholder='input'></input>
  </div>
</div> */}