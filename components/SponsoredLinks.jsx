import React from 'reactn';

import { request } from '../utilities/app.utilities';

export default class SponsoredLinks extends React.Component {
    constructor(props){
        super(props);
        this.state = ({ content: null });
    }

    async componentDidMount() {
        try {
            let sponsoredContent = (await request('/pages/sponsored-content')).content.rendered;
            this.setState({ content: sponsoredContent });    
        }
        catch (e) {
            this.setState( {content: null });
        }
    }

    render() {
        const { content } = this.state;
        if (!content){
            return (
            <div className='sponsored-links'>
                <h2>Sponsored</h2>
            </div>);
        }
        return (
        <div className='sponsored-links'>
            <h2>Sponsored</h2>
            <div dangerouslySetInnerHTML={{__html: content}} />
        </div>);
    }
}
