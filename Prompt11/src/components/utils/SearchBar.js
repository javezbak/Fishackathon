import React from "react";

export default class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            search: null
        };
    }

    render(){
        return (
            <div className="input-group stylish-input-group">
                <input type="text" onChange={(e)=>{
                    this.props.retrieveSearchBarValue(e.target.value);
                }} className="form-control" placeholder={"Search..."}/>
                <span className="input-group-addon">
                        <button type="submit">
                            <span className="glyphicon glyphicon-search"/>
                        </button>
                </span>
            </div>
        );
    }
}