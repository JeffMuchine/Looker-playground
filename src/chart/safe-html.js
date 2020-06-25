import DOMPurify from 'dompurify'
import React, { Component } from 'react';

const thisIsMyCopy = '<p>copy copy copy <strong>strong copy</strong></p>';


class SafeHtml extends Component {
    render() {
        return(
            <div className="content" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(thisIsMyCopy)}}></div>
        );
        
    }
  }

  export default SafeHtml;