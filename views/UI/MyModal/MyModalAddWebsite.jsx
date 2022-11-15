const React = require('react');

module.exports = function Modal2() {
  return (
    
          <div data-modal-window="modal_add_website" className="modal">
            <div className="modal_content">

              <div className="modal_inner">
                <div className="modal_title"> Модальное окно</div>
                <div className="close_modal_window">&times;</div>
              </div>
              <p>Это для добавления сайтов</p>
              <input placeholder='input'></input>
              
            </div> 
            <link rel="stylesheet" href="/css/UI/MyModal/MyModal.css" />
            <script defer src="/js/formCreate.js" />
      </div>
     
  );
};
