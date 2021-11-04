import React from 'react';
import axios from 'axios';

class Departments extends React.Component {
    state = {
        departmentData: []
    };

    fetchDepartmentData = () => {
        var encodedURI = window.encodeURI(this.props.uri);
        return axios.get(encodedURI).then(response => {
            this.setState(() => {
                return {
                    departmentData: response.data
                };
            });
        });
    };

    componentDidMount() {
        this.fetchDepartmentData();
    }

    render() {
        console.log(this.state.departmentData);
        if (this.state.departmentData.length === 0) {
            return <div>Could not fetch the data you are looking for.</div>;
        }
        const departments = this.state.departmentData.map((department, idx) => (
            <div key={idx}>
                <em>{department.title}</em>
            </div>
        ));
        return <div>{departments}</div>
    }
}

export default Departments;