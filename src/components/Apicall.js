// import React from "react";
// class Apicall extends React.Component {
//     state = { people: [], isLoading: true, error: null };
// 
//     async componentDidMount() {
//         try {
//             const response = await fetch('https://randomuser.me/api/');
//             const data = await response.json();
//             this.setState({ people: data.results, isLoading: false });
//         } catch (error) {
//             this.setState({ error: error.message, isLoading: false });
//         }
//     }
// 
//     renderPerson = () => {
//         const { people, isLoading, error } = this.state;
// 
//         if (error) {
//             return <div>{error}</div>;
//         }
// 
//         if (isLoading) {
//             return <div>Loading...</div>;
//         }
// 
//         return people.map(person => (
//             <div key={person.id.value}>
//                 <img src={person.picture.large} alt="avatar" />
//                 <div>Hi, My name is</div>
//                 <h3>{person.name.first}</h3>
//             </div>
//         ));
//     };
// 
//     render() {
//         return <main>{this.renderPerson()}</main>;
//     }
// }
// 
// export default Apicall

import React from 'react';
import axios from 'axios';
import '../App.css';

function Apicall() {
    let [responseData, setResponseData] = React.useState('');

    const fetchData = React.useCallback(() => {
        axios({
            "method": "GET",
            "url": "https://quotes15.p.rapidapi.com/quotes/random/",
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "quotes15.p.rapidapi.com",
                "x-rapidapi-key": process.env.REACT_APP_API_KEY
            }, "params": {
                "language_code": "en"
            }
        })
            .then((response) => {
                setResponseData(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    React.useEffect(() => {
        fetchData()
    }, [fetchData])

    return (
        <div className="App">
            <header className="App-header">
                <h1>
                    Fetching Data with React Hooks
                </h1>
                <button type='button' onClick={fetchData}>Click for Data</button>
            </header>
            <main>
                {responseData &&
                    <blockquote>
                        "{responseData && responseData.content}"
                        <small>{responseData && responseData.originator && responseData.originator.name}</small>
                    </blockquote>
                }
            </main>
            {/* <pre>
        <code>
          {responseData && JSON.stringify(responseData, null, 4)}
        </code>
      </pre> */}
        </div>
    );
}

export default Apicall;