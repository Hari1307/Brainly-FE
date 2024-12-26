import { useEffect, useState } from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CreateContent from '../components/CreateContent';
import Sidebar from '../components/Sidebar';
import { PlusIcon } from '../icons/plusIcon';
import { ShareIcon } from '../icons/shareIcon';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BACKEND_URL } from '../config';

function Dashboard() {
    const [contents, setContents] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();
    if (localStorage.getItem("token") === null) {
        navigate("/error");
    }

    const getContent = async () => {
        const response = await axios.get(`${BACKEND_URL}/api/v1/content`, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        })
        setContents(response.data.content);
    }

    useEffect(() => {
        getContent();
    }, [modalOpen]);


    return (
        <>
            <Sidebar />
            <div className='p-4 ml-72 bg-gray-200 min-h-screen'>
                <CreateContent open={modalOpen} onClose={() => {
                    setModalOpen(false)
                }} />
                <div className='flex gap-4 justify-end'>
                    <Button variant='Primary' icon={<PlusIcon />} text="Add Content"
                        onClick={() => { setModalOpen(true) }} />
                    <Button variant='Secondary' icon={<ShareIcon />} text="Share Brain"
                    />
                </div>
                <div className='flex gap-4 mt-4 flex-wrap'>
                    {contents.map(({ type, link, title, key }) => <Card key={key}
                        type={type}
                        link={link}
                        title={title}
                    />)}
                    {/* <Card title='youtube' link='https://www.youtube.com/watch/KHIbgSN2qAU' type='Youtube' />
                    <Card title='tweet' link='https://twitter.com/TataCompanies/status/1844082059960254962?ref_src=twsrc%5Etfw' type='Twitter' /> */}
                </div>
            </div>
        </>
    )
}

export default Dashboard
