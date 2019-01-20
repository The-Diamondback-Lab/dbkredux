// NOTICE: importing reactn instead of react
import React from 'reactn';
import { Link } from '../routes';

import Searchbar from '../components/Searchbar.jsx';

import { request } from '../utilities/app.utilities.js';

import $ from 'jquery';


export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { scrolled: this.props.scrolled, menu: null };
    }

    async componentDidMount() {
        const sidebar = await request('/menu/sidebar');
        var nestedMenus = sidebar.items.map((ele, i) => <NestedMenu data={ele} key={i} level={0} />);
        this.setState ({ scrolled: this.props.scrolled, menu: nestedMenus });
    }

    componentWillReceiveProps(newProps) {
        this.setState({ show: false, scrolled: newProps.scrolled });
    }

    render() {
        const { mobile } = this.global;
        const { scrolled, menu } = this.state;

        if (menu === null){
            return "";
        }

        var searchBar = "";

        if (mobile){
            searchBar = (<div className="search-section">
                <Searchbar />
            </div>);
        }


        return (
            <div id="sidebar" className={`sidebar ${scrolled ? 'sidebar-sticky' : ''} ${mobile ? 'sidebar-mobile' : ''}`} >
                {searchBar}
                {menu}
            </div>
        )
    }
}

const NestedMenu = (props) => {
    const { data, level } = props;
    const id = "sidebar-item-"+data.id;
    var inner = "";
    if (typeof data.children !== 'undefined') {
        inner = data.children.map((ele, i) => <NestedMenu data={ele} key={i} level={level+1} />);
    }
    //Menu item doesn't have any children
    else{
        if (data.type === 'custom'){
            return ( 
            <div id={id} className="sidebar-item">
                <a href={data.url} className="sidebar-link" target="_blank" >
                    <p>{data.title}</p>
                </a>
            </div>);
        }
        return ( 
            <div id={id} className="sidebar-item">
                <Link href={data.url}>
                    <a className="sidebar-link"><p>{data.title}</p></a>
                </Link>
            </div>);    
    }

    const toggle = function (id) {
        $("#"+id).toggleClass("active");
    };
    return (
        <div id={id} className="sidebar-item has-children">
            <div 
                className="sidebar-link" 
                onClick={() => toggle(id)}
            >
                <Link href={data.url}>
                    <a><p>{data.title}</p></a>
                </Link>
            </div>
            {inner}
        </div>
    );
};