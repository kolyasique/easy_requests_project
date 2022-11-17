const React = require('react');

module.exports = function ModalAddWebsite() {
  return (
    
          <div data-modal-window="modal_add_website" className="modal">
            <div className="modal_content">

              <div className="modal_inner">
                <div className="modal_title"> Добавить сайт </div>
                <div className="close_modal_window">&times;</div>
              </div>
              <form className="add-site-form">
                <input type='text' placeholder='Название' name='title'/>
                <input type='text' placeholder='URL адрес' name='web'/>
                <button type='submit'> Добавить </button>
              </form>
              
            </div> 
            <link rel="stylesheet" href="/css/UI/MyModal/MyModal.css" />
            <script defer src="/js/addSite.js" />
      </div>
     
  );
};
