const React = require('react');
const Layout = require('./Layout');
const Modal = require('./UI/MyModal/MyModalCreateForm')
const Modal2 = require('./UI/MyModal/MyModalAddWebsite')

module.exports = function Test() {
  return (
    <Layout>
      <div className="page">

        <div className="firstcontainer">
          <button data-modal-btn="modal_add_website" id="add-site-button"> add site </button>
        </div>

        <div className="secondcontainer">
          <button data-modal-btn="modal_create_form" id="create-form-button"> create form </button>
          {/* <div data-modal-window="modal_create_form" className="modal">
            <div className="modal_content">

              <div className="modal_inner">
                <div className="modal_title"> Модальное окно</div>
                <div className="close_modal_window">&times;</div>
              </div>

              <input placeholder='input'></input>
            </div>
          </div> */}

        </div>
     <Modal/>
     <Modal2/>
      </div>
      <script defer src="/js/formCreate.js" />
    </Layout>
  );
};
