import React, { PureComponent} from 'react';
import {Person} from '../model/People'
import PersonComponent from './PersonComponent'
import {peopleController} from '../../ApplicationContext'

export default class PeopleServerListComponent extends PureComponent<{}, {people: Array<Person>}>{
    state = {
        people: [],
      };
    async componentDidMount(){
        let peopleList:Array<Person> = await peopleController.allPeople()
        this.setState({people: peopleList})
      }
    
      render(){
        let peopleHtmlElements = this.state.people.map((p:Person) =>
        <PersonComponent key={p.id} person={p} detail={true} />)
    
        return (
            <div className="content">
            <h3>List of server people</h3>
            <ul>{peopleHtmlElements}</ul>
        </div>
        );
    }
}