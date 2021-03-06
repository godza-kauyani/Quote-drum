import React, {Component} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

class QuotesBox extends Component {
  render() {
    return (
      <Form id='quote-box'>
        <FormGroup>
          <Label for="text">Quote</Label>
          <Input plaintext id="text" value={this.props.quote.quote} />
        </FormGroup>
        <FormGroup>
          <Label for="author">Author</Label>
          <Input plaintext id="author" value={this.props.quote.author} />
        </FormGroup>
        <Button id="new-quote" onClick={this.props.onClick}>
          Get Quote
        </Button>
        <ul>
          <li>
            <a className="btn" id="tweet-quote" href="twitter.com/intent/tweet">
              TWITTER
            </a>
          </li>
        </ul>
      </Form>
    );
  }
}

export default QuotesBox;
