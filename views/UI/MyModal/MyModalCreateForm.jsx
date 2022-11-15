const React = require('react');

module.exports = function Modal() {
  return (
    
          <div data-modal-window="modal_create_form" className="modal">
            <div className="modal_content">

              <div className="modal_inner">
                <div className="modal_title"> Модальное окно</div>
                <div className="close_modal_window">&times;</div>
              </div>
              
              <input placeholder='input'></input>
            </div> 
            <link rel="stylesheet" href="/css/UI/MyModal/MyModal.css" />
            <script defer src="/js/formCreate.js" />
      </div>
     
  );
};
