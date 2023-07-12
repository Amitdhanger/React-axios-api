import React from  'react';
import userimage from '../Assests/Image/userimage.png';
import Amit from '../Assests/Image/amit.jpg'
import './Components.scss';
import axios from 'axios';


class Api extends React.Component{

    state = {
        commentsList : []
    }


    componentDidMount(){

        axios.get('https://jsonplaceholder.typicode.com/comments').then((result) => {

          let commentsList = result.data 
          this.setState({commentsList})
          
        })
    }

    render(){
        return(
            <>
             <div className='container'>

                <h1>POST</h1>
                <div className='post-box'>
                    <div className='user-img'>
                        <img src={userimage}  alt="user"/>
                    </div>
                    <div className='user-name'>
                        @Amit Dhanger
                    </div>

                    <div className='post-image'>
                     <img src={Amit} alt="post"/>
                    </div>
                </div>

                <div className='comment-box'>

                    <h2>Recent Comments</h2>
                    {
                    this.state.commentsList.map(Comment =>
                        <div className='user-comment' key ={Comment.id}>
                        <div className='name'>{Comment.name}</div>
                        <div className='e-mail'> {Comment.email}</div>
                        <div className='comment'><h5>Comment :-</h5> {Comment.body}</div>
                        
                        </div>
                        )
                }
                       
                    
                </div>
             </div>
              
               
           
            
            </>
        )
    }
}

export default Api