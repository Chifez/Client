import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useParams, useNavigate } from 'react-router-dom';
import { chats } from '../../utils/data/chatData';
import { IoIosArrowBack, IoMdAttach } from 'react-icons/io';
import { SlOptionsVertical } from 'react-icons/sl';
import { BiCheckDouble } from 'react-icons/bi';
import { MdSend } from 'react-icons/md';
import Button from '../../components/shared/Button';
import { useBoundedStore } from '../../../store/store';
import Modal from '../../components/shared/modal';
import PaymentModal from './paymentModal';
import PreviewCard from './PreviewCard';

const Chat = () => {
  const [inputText, setInputText] = useState('');
  const [userChats, setUserChats] = useState(chats);
  const [imageURL, setImageURL] = useState(null);

  const { id } = useParams();
  const openModal = useBoundedStore((state) => state.openModal);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = () => {
      // Set the image URL in the state
      setImageURL(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  function isLink(inputText) {
    const input = inputText.trim().toLowerCase();
    const urlPattern = /^(https?:\/\/)?[\w.-]+\.[a-zA-Z]{2,}(\/\S*)?$/i;
    return urlPattern.test(input);
  }
  const SendMessage = () => {
    if (!inputText && !imageURL) return;
    isLink(inputText);
    const newMessage = {
      messageID: isLink(inputText) ? 'paymentlink' : 'Admin',
      time: new Date().toLocaleTimeString([], {
        hour: 'numeric',
        minute: '2-digit',
      }),
      message: [inputText],
      imageURL: imageURL || null,
    };
    const filteredUsers = userChats.filter((item) => item.name === id);

    if (filteredUsers.length > 0) {
      const user = filteredUsers[0];

      const updatedMessageList = [...user.messageList, newMessage];

      const updatedChats = userChats.map((item) =>
        item.name === id ? { ...item, messageList: updatedMessageList } : item
      );

      setUserChats(updatedChats);
      setImageURL(null);
      setInputText('');
    }
    if (isLink(inputText)) {
      console.log('PaymentLink');
    } else {
      console.log('Text');
    }
  };
  return (
    <div className="w-[82vw] h-screen relative">
      <>
        {userChats
          .filter((item) => item.name == id)
          .map((item, idx) => (
            <Card item={item} key={idx} />
          ))}
      </>
      <div className=" flex flex-col items-center gap-6  w-full overflow-hidden">
        <Button
          name="Payment link"
          extraclass="bg-[#D9D9D9] text-blue-900 text-lg font-medium font-inter w-fit px-8 py-3 rounded-full"
          handleClick={() => {
            openModal();
            console.log('clicked');
          }}
        />

        <div className="w-full py-5  px-2 h-[5vh] flex items-center justify-between bg-[#E0E0E0] border">
          <div className="flex-1 flex items-center gap-3 ">
            <div {...getRootProps()} className="relative">
              <input
                {...getInputProps()}
                className="absolute left-0 w-full opacity-0"
              />
              {/* <input
                type="file"
                className="absolute left-0 w-full border border-[red] opacity-0"
              /> */}
              <IoMdAttach className="w-5 h-5" />
            </div>
            <input
              type="text"
              placeholder="Type your message here"
              className="flex-1 outline-none bg-transparent placeholder-[#434041]"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
          </div>
          <MdSend className="w-5 h-5 text-blue" onClick={SendMessage} />
        </div>
        <div className="absolute w-32 left-0">
          {imageURL && (
            <img src={imageURL} alt="Uploaded" className="object-cover" />
          )}
        </div>
      </div>
      <Modal>
        <PaymentModal />
      </Modal>
    </div>
  );
};

const Card = ({ item }) => {
  const navigate = useNavigate();
  const { name, image, messageList } = item;
  return (
    <div className="w-full h-[80vh] overflow-hidden">
      <header className="w-full h-[8vh] flex items-center justify-between bg-[#64BCF433] py-2 px-6">
        <div className="flex items-center gap-2">
          <IoIosArrowBack onClick={() => navigate('/dashboard/messages')} />
          <div className="w-10 h-10 rounded-full border overflow-hidden">
            <img src={image} alt="profile" className="w-full h-full" />
          </div>
          <p className="font-Esemi capitalize">{name}</p>
        </div>
        <SlOptionsVertical />
      </header>
      <div
        className={`flex flex-col p-5 h-[70vh] overflow-scroll no-scrollbar `}
      >
        {messageList.map((item) => (
          <>
            <div
              className={`h-auto max-w-2xl p-3 my-1
            ${
              item.messageID == 'user'
                ? 'mr-auto  bg-[#D9D9D9] rounded-t-xl rounded-br-xl'
                : 'ml-auto bg-[#E0F2FD] rounded-t-xl rounded-bl-xl'
            }`}
            >
              {item.messageID == 'paymentlink' ? (
                <PreviewCard />
              ) : (
                <span className="font-inter">
                  {item.message.map((item) => (
                    <p>{item}</p>
                  ))}
                  {item.imageURL && (
                    <div className="w-52">
                      <img
                        src={item.imageURL}
                        alt="Uploaded"
                        className="object-cover"
                      />
                    </div>
                  )}
                </span>
              )}
              <div className="flex w-full items-end gap-1 justify-end">
                <p className="text-[10px]">{item.time}</p>
                {item.messageID === 'user' && (
                  <BiCheckDouble className="w-3 h-3 text-[#3F3B3B]" />
                )}
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
export default Chat;
