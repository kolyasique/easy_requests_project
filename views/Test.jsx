/* eslint-disable react/prop-types */
const React = require('react');
const Layout = require('./Layout');
const ModalCreateForm = require('./UI/MyModal/MyModalCreateForm')
const ModalAddWebsite = require('./UI/MyModal/MyModalAddWebsite')
const MySiteDiv = require('./UI/MySites/MySiteDiv')

module.exports = function Test({ formUniKey, mySites }) {
  return (
    <Layout>
      <div className="page">
        <div className="firstcontainer">
          <button data-modal-btn="modal_add_website" id="add-site-button"> add site </button>
          { mySites.map(site => (
            <div>
         <MySiteDiv formUniKey={formUniKey} site={site}/>
         
         </div>
            ))} 
            <div>
                <ModalAddWebsite/>
            </div>
        
        </div>
        <script defer src="/js/showModals.js" />
      </div>
    </Layout>
  );
};
