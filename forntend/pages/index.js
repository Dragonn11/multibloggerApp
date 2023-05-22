import {useState,useEffect} from 'react';
import Layout from "../components/Layout";
import Search from '../components/blog/Search';
import Link from 'next/link';
import HomeCard from '../components/home/HomeCard';
import {getCategories} from '../actions/category';
import {listByCategories} from '../actions/blog';

const Index = ({categories})=>{

   

    const [rowOneValues,setRowOneValues]=useState({
        catArray:['catone','react','bubble'],
        row1:[],
        reload:false
    
    });

    const [rowTwoValues,setRowTwoValues]=useState({
        row2:[]
    });
    
    const [rowThreeValues,setRowThreeValues]=useState({
        row3:[]
    });
    
     const {row1,reload,catArray} = rowOneValues;
     const {row2} = rowTwoValues;
     const {row3} = rowThreeValues;

    

    useEffect(()=>{
        
        filterCategories(); 
       
    },[reload]);

    const filterCategories=()=>{
        let selectCategoryId=[];
        for(let i=0;i<catArray.length;i++){
            selectCategoryId[i] = categories.find((c)=>{
                if(c.name===catArray[i]){
                    return c._id
                }
            })
            
        }
        
         getFilterCategories(selectCategoryId);
    }

    const getFilterCategories =(selectCategoryId)=>{

       console.log('selectCategoryId',selectCategoryId);
        if(selectCategoryId[0].name==='catone'){
            console.log('selectCategoryId',selectCategoryId[0]);
            listByCategories(selectCategoryId[0]).then(data=>{
                if (data.error) {
                    console.log(data.error);
                } else {
                    console.log('data',data);
                    // row1=data;
                    setRowOneValues({...rowOneValues,row1:data})
                   
                }
            })

        }

        if(selectCategoryId[1].name==='react'){
            console.log('selectCategoryId',selectCategoryId[1]);
            listByCategories(selectCategoryId[1]).then(data1=>{
                if (data1.error) {
                    console.log(data1.error);
                } else {
                   

                     setRowTwoValues({...rowTwoValues,row2:data1})
                   
                }
            })

            if(selectCategoryId[2].name==='bubble'){
                console.log('selectCategoryId',selectCategoryId[2]);
                listByCategories(selectCategoryId[2]).then(data2=>{
                    if (data2.error) {
                        console.log(data2.error);
                    } else {
                       
    
                        setRowThreeValues({...rowThreeValues,row3:data2})
                       
                    }
                })
            }
    
        }
        
    }

    const showRelatedList = (row)=>{
        return  row?row.map((i,l)=>{
              return(
                  <div className='col-md-4' key={i}>
                      <article>
                          <HomeCard blog={i} />
                      </article>
                  </div>
              )
          }):'';
      }
   

    return(
        <Layout>
           

        <div className="banner">
				<div className="container">
					
					<h1>I'm Banner Heading for This Page</h1>
					
					<p>It is our belief that in order to be most efficient it requires adaptive technology and software our customers can focus on their core business.</p>
				</div>
			</div>
            <Search/>
            {console.log("row1",row1)}
            {console.log("row2",row2)}
            {console.log("row3",row3)}
            <div className="container">
                <h4 className="text-center pt-4 pb-4 h2">Health || Nutri blogs</h4>
                    <hr />
                    <div className='row'>{showRelatedList(row1)}</div>
            </div>
            <div className="container">
                <h4 className="text-center pt-4 pb-4 h2">Fitness || Yoga </h4>
                    <hr />
                    <div className='row'>{showRelatedList(row2)}</div>
            </div>
            <div className="container">
                <h4 className="text-center pt-4 pb-4 h2">Mental Health </h4>
                    <hr />
                    <div className='row'>{showRelatedList(row3)}</div>
            </div>

            <div className="subscribe" id="subscribe">
				<div className="container">
					
					<div className="sub-content">
						<h3>Subscribe Here for Updates</h3>
						<form role="form">
							<div className="input-group">
								<input type="text" class="form-control" placeholder="Email..."/>
									<span className="input-group-btn">
										<button className="btn btn-default" type="button">Subscribe</button>
									</span>
							</div>
						</form>
					</div>
				</div>
			</div>
        </Layout>

        



    )
}

Index.getInitialProps = () => {
    return getCategories().then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            // console.log('GET INITIAL PROPS IN SINGLE BLOG', data);
            return { categories: data };
        }
    });
};

export default Index;