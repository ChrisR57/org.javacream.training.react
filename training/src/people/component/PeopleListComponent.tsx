import React, {PureComponent} from 'react';
import { Person } from '../model/People';
import PersonComponent from './PersonComponent';

class PeopleListComponent extends PureComponent<{people: Array<Person>}, {}>{

    constructor(readonly props :{people: Array<Person>}){
        super(props)
    }
    render(){
        let htmlPeople = this.props.people.map( (p) => (<><li><PersonComponent key={p.id} person={p}/></li></>))
        return (
                    <div className="content">
                        <h3>List of local people</h3>
                        <ol>{htmlPeople}</ol>
                    </div>    
                )
    }

    componentDidMount(){
        setTimeout(() => {
            this.forceUpdate()//DON'T DO THAT!
        }, 4000)
    }
}

export default PeopleListComponent