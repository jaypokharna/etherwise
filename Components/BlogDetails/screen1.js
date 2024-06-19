/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { FaFacebookSquare } from 'react-icons/fa';
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import EtherwiseIcon from "/public/imgs/etherwiseIcon/etherwiseIcon.png"
import { formatDistanceToNow, parseISO } from 'date-fns';
import useBlog1 from '@/Hooks/blogs/blog1';
import useBlog2 from '@/Hooks/blogs/blog2';
import useBlog3 from '@/Hooks/blogs/blog3';
import useBlog4 from '@/Hooks/blogs/blog4';
import { useBlogsData } from '@/Hooks/blogs_data'
import { useUrl } from "nextjs-current-url";
import { FacebookShareButton,TwitterShareButton,LinkedinShareButton,WhatsappShareButton} from 'react-share';


const Screen1 = ({ blogName }) => {

  const [fetchedComments, setComments] = useState([])
  const [filterSelected, setFilterSelected] = useState()
  const [comment, setComment] = useState()
  const [author, setAuthor] = useState()
  const [email, setEmail] = useState()

  const blog_details = useBlogsData();
  const currentBlog = blog_details[0].cards.find(blog => blog.heading === blogName)

  let data

  switch (currentBlog?.blogNumber) {
    case 1:
    data = useBlog1();
    break;
    case 2:
    data = useBlog2();
    break;
    case 3:
    data = useBlog3();
    break;
    case 4:
    data = useBlog4();
    break;
    default:
    break;
  }

  // const fetchComments = async (blogName) => {
  //   try {
  //     const result = await fetch((`/api/comments`))
  //     // const result = await fetch(`http://localhost:5000/fetchComments/blockchain`)

  //     const comments = await result.json();
  //     console.log(comments)
  //     setComments(comments);

  //   } catch (error) {
  //     console.log("Error - ", error.message)
  //   }
  // }

  const fetchComments = async (blogName) => {
    try {
      const blogN = decodeURIComponent(blogName);

      const result = await fetch(`/api/fetchComments?blogName=${blogN}`)
      const comments = await result.json();
          setComments(comments);
      

    } catch (error) {
      console.log("Error - ", error.message)
    }
  }

  // const addComment = async (blogName, comment, author, email) => {
  //   try {
  //     const content = comment;
  //     const result = await fetch(`/api/addComment`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify({ blogName, content, author, email })
  //     })

  //     setAuthor("")
  //     setEmail("")
  //     setComment("")
  //     const comments = await result.json();
  //     fetchComments(blogName)

  //   } catch (error) {
  //     console.log("Error - ", error.message)
  //   }
  // }

  const addEmail = async(email)=>{

    const response = await fetch('/api/addEmail',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

  }

  const addComment = async (blogName, comment, author, email) => {
    try {
      const blogN = decodeURIComponent(blogName);
      const content = comment;
      const response = await fetch(`/api/addComments?blogName=${blogN}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ blogName : blogN , content, author, email }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      setAuthor("")
      setComment("")
      await response.json();
      addEmail(email);
      setEmail("")
      fetchComments(blogN)
      
      

      if (response.ok) {
        setComment('');
      } else {
        alert('Failed to add comment');
      }
    } catch (error) {
      console.error('Error adding comment:', error);
      alert('An error occurred');
    }
  }




  useEffect(() => {

  const result = fetchComments(blogName);

  }, [])

  // Log comments whenever it updates
  useEffect(() => {
    
  }, [fetchedComments]);

  const initialItems = 5;
  const [visibleItems, setVisibleItems] = useState(initialItems);

  // Function to load more items
  const loadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + initialItems);
  };

  // Function to load more items
  const showLess = () => {
    setVisibleItems(5);
  };

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    const offset = element.offsetTop - 20;
    window.scrollTo({
      top: offset, 
      behavior: 'smooth'
    });
  };

  const filterComments = ()=>{



  }

  const [blogurl, setblogurl] = useState()


  const { href: currentUrl, pathname } = useUrl() ?? {};
  
  useEffect(() => {
    
    setblogurl(currentUrl)

  }, [currentUrl])
  


  return (
    <div className='w-full h-fit  flex flex-col items-center relative top-20 overflow-x-hidden'>

      <div className='w-[100vw]'>
        <img src="/imgs/blogs/blogDetails/headingImg.png" className="w-[100vw]" alt="" />
      </div>

      <div className='w-[100vw] h-fit p-6 px-8  flex'>



        {/* Table of content */}
        <div className='left-table-content w-[45%] h-full sticky top-[20px] flex items-center justify-center'>

          <div className='w-[90%] h-full p-2 my-20 flex flex-col gap-2 bg-[#F4F7FF] rounded-lg bg-opacity-80 shadow-md'>
          <a onClick={() => scrollToElement(data.title)} className="text-lg cursor-pointer hover:font-medium">{`-> ${data?.title}`}</a>
            {data?.content.map((item,index)=>{
              if(item.type === 'heading'){
                return <a onClick={() => scrollToElement(item.value)} key={index} className="text-lg cursor-pointer hover:font-medium">{`-> ${item.value}`}</a>;
              }
            })}

          </div>

        </div>
        {/* Table of content */}



        {/* Blog */}
        <div className='right-content-part w-full h-full p-2 text-justify  '>

          <div className="container mx-auto p-5 border-black rounded-xl">
            <h1 className="text-4xl font-bold mb-5 text-center" id={`${data?.title}`}>{data?.title}</h1>
            {data?.content.map((item, index) => {
              if (item.type === 'heading') {
                return <h2 key={index} className="text-4xl font-semibold mt-5 mb-2" id={`${item.value}`}>{item.value}</h2>;
              } else if (item.type === 'text') {
                return <p key={index} className="text-lg mb-4">{item.value}</p>;
              } else if (item.type === 'image') {
                return <img key={index} src={item.src} alt={item.alt} className="my-5 mx-auto max-w-full rounded-3xl  border-black drop-shadow-md  shadow-black" />;
              } else if (item.type === 'list') {
                return (
                  <ul key={index} className="list-disc list-inside ml-5 mb-4">
                    {item.value.map((listItem, listIndex) => (
                      <li key={listIndex} className="text-lg">{listItem}</li>
                    ))}
                  </ul>
                );
              } else if (item.type === 'poll') {
                return (
                  <div key={index} className="mb-5">
                    <h3 className="text-xl font-semibold">{item.question}</h3>
                    <ul className="list-disc list-inside ml-5">
                      {item.options.map((option, optionIndex) => (
                        <li key={optionIndex} className="text-lg">{option}</li>
                      ))}
                    </ul>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>

        </div>
        {/* Blog */}

      </div>

      {/* Comments writing Section */}
      <div className='w-[100vw] h-fit  py-6 px-4 flex justify-evenly bg-[#F4F7FF]'>

        <div className=' w-[25%] h-fit p-4 pt-8 flex flex-col items-center justify-center'>

          <h1 className='text-lg font-light'>Enter your details to write a review</h1>

          <div className='w-full flex justify-center'>
            <input type="text" name="author" value={author} onChange={(e) => { setAuthor(e.target.value) }} id="author" className='font-light p-2 border-2 border-blue-900 border-opacity-45 rounded-2xl w-full outline-none my-1' placeholder='Full Name' />
          </div>

          <div className='w-full flex justify-center'>
            <input type="email" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} id="email" className='font-light p-2 border-2 border-blue-900 border-opacity-45 rounded-2xl w-full outline-none my-1' placeholder='Email' />
          </div>

          <div className='w-full h-[1px] bg-black my-4'></div>

          <div className='flex flex-col w-full h-full pb-3 items-center gap-2'>
            <h1 className='text-xl'>Share On</h1>
            <div className='flex h-full gap-4'>
              <FacebookShareButton children={<FaFacebookSquare size={33} className='cursor-pointer'/>} url={blogurl}/>
              <WhatsappShareButton children={<FaWhatsapp size={33} className='cursor-pointer'/>} url={blogurl} />
              <LinkedinShareButton children={<FaLinkedinIn size={33} className='cursor-pointer'/>} url={blogurl} />
              <TwitterShareButton children={<FaTwitter size={33} className='cursor-pointer'/>} url={blogurl}/>
            </div>
          </div>

        </div>
        {/* Left Part Ends */}

        {/* Right Part */}
        <div className='flex flex-col items-center justify-evenly w-[45%] h-full p-2 gap-3 relative'>

          <div className='flex gap-4 items-center justify-end w-full px-6'>
            {/* <h1 className={`cursor-pointer hover:font-bold ${filterSelected == 1 ? 'underline font-bold' : 'no-underline font-sans'}`} onClick={()=>{setFilterSelected(1)}}>Best</h1> */}
            <h1 className={`cursor-pointer hover:font-bold ${filterSelected == 1 ? 'underline font-bold' : 'no-underline font-sans'}`} onClick={() => {
              setFilterSelected(1)
              filterComments(filterSelected)
            }}>Newest</h1>
            <h1 className={`cursor-pointer hover:font-bold ${filterSelected == 2 ? 'underline font-bold' : 'no-underline font-sans'}`} onClick={() => { 
              setFilterSelected(2) 
              filterComments(filterSelected)
              }}>Oldest</h1>
          </div>

          <div className='flex flex-col w-full h-[35%] gap-0 rounded-xl relative'>
            <div className='flex gap-2 items-center justify-center w-fit'>
              <h1 className='text-xl ml-5 font-semibold'>Comment<img src="" alt="" /></h1>
              <img src={EtherwiseIcon} alt="" className='h-4 opacity-50' />
            </div>
            <textarea type="text" name="" id="" value={comment} onChange={(e) => { setComment(e.target.value) }} placeholder='Enter your review.' className='w-full h-full border-2 border-blue-900 border-opacity-45 rounded-3xl font-light p-3 outline-none' />
            <button className=' mt-1 ml-[87%] border-0 w-fit h-fit text-lg font-medium rounded-xl px-7 py-2 bg-[rgb(51,103,199)] hover:bg-blue-600 hover:font-semibold text-white outline-none' onClick={() => { addComment(blogName, comment, author, email) }}>SEND </button>
          </div>

          {/* <div className=' flex flex-col gap-3 w-[80%] h-[70%] rounded-xl p-4 border-2 border-black border-opacity-25 overflow-scroll'> */}
          <div className=' flex flex-col gap-3 w-[80%] h-fit overflow-x-hidden rounded-xl p-4  '>

            {/* {fetchedComments?.slice(0, visibleItems).map((item, i) => { */}
            {fetchedComments?.slice(0, visibleItems).map((item, i) => {
              return (
                <div key={i} className=' flex flex-col gap-2 shadow-sm p-2 rounded-xl'>

                  <div className='flex items-center gap-3'>
                    <img src={`https://avatar.iran.liara.run/username?username=${item.author}`} alt="" className='h-8' />
                    <h1 className='text-lg font-semibold'>{item?.author}</h1>
                    <h1 >{formatDistanceToNow(parseISO(item?.date), { addSuffix: true })}</h1>
                  </div>
                  <p className='px-1'>{item.content}</p>

                </div>
              )
            })}

            {visibleItems < fetchedComments.length && (
              <button onClick={loadMore} className=' cursor-pointer bg-gray-400 w-fit mx-auto px-3 py-2 rounded-full text-white hover:bg-gray-600/50'>Show More</button>
            )}

            {visibleItems >= fetchedComments.length && fetchedComments.length > 5 && (
              <button onClick={showLess} className=' cursor-pointer bg-gray-400 w-fit mx-auto px-3 py-2 rounded-full text-white hover:bg-gray-600/50'>Show Less</button>
            )}



          </div>

        </div>
      </div>




    </div>
  )
}

export default Screen1