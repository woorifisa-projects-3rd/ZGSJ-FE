// PageProfileDetail.js
'use client'
import DefaultTable from '@/components/table/DefaultTable';
import classes from './ProfileDetail.module.css';
import WorkplaceModal from '@/components/modal/workplace-registration.js/workplace-registration';
import ModalContainer from '@/components/modal/modal-container';
import { useState, useEffect } from 'react';
import PrimaryButton from '@/components/button/primary-button';
import DeleteConfirmModal from '@/components/modal/delete-confirm/delete-confirm';
import PresidentInfo from './PresidentInfo';


//테스트 데이터
const tableName='보유하신 사업장'
const tableHeaders = {
    storeName: "사업장 상호명",
    businessNumber: "사업자 번호",
    accountNumber: "계좌번호",
    count: "직원 수",
    edit: "편집",
    actions: "삭제"
};

export default function ProfileDetail({content}) {
    const [isRegistrationModalOpen, setRegistrationModalOpen] = useState(false);
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectedWorkplace, setSelectedWorkplace] = useState(null);
    const [userData, setUserData] = useState(null);

    const workplaceInfo =content.workplaceInfo; // 사업장 정보(버튼 미포함)

    const enrichedWorkplaceInfo = workplaceInfo.map(workplace =>({
        ...workplace,
        // edit와 actions에 대한 컴포넌트를 직접 할당
        edit:(
            <PrimaryButton
                text="편집"
                onClick={() => {
                    setSelectedWorkplace(workplace);
                    setEditModalOpen(true);
                }}
            />
        ),
        actions: (
            <PrimaryButton
                text="삭제"
                onClick={() => {
                    setSelectedWorkplace(workplace);
                    setDeleteModalOpen(true);
                }}
            />
        )

    }))


    useEffect(() => {
        const loadMyPageData = async () => {
           
            try {
                const data = await mypageApi.getMyInfo(); 
                setUserData(data);
                console.log('userdata', data)
            } catch (error) {
                console.error('마이페이지 로드 에러:', error);
            }
        };
    
        loadMyPageData();
    }, []);
   
    
   return (
       <div className={classes.container}>
        
                
            {/* 다른 컴포넌트 적용해야함 */}
           <div className={classes.otherComponent}>
                <PresidentInfo />
                
            </div>

           <DefaultTable tableName={tableName} tableHeaders={tableHeaders} list={enrichedWorkplaceInfo}/>

            <div className={classes.addButtonContainer}>
                   <button 
                    onClick={()=>setRegistrationModalOpen(true)}
                    className={classes.addButton}
                   >
                       <div className={classes.iconContainer}>
                           <svg 
                               className={classes.icon}
                               fill="none" 
                               stroke="currentColor" 
                               viewBox="0 0 24 24"
                           >
                               <path 
                                   strokeLinecap="round" 
                                   strokeLinejoin="round" 
                                   strokeWidth="2" 
                                   d="M19 14l-7 7m0 0l-7-7m7 7V3"
                               />
                           </svg>
                       </div>
                       <span className={classes.addButtonText}>사업장 추가 및 등록</span>
                   </button>
            </div>

            {/* 등록 모달 */}
            <ModalContainer
                title="사업장 등록"
                isOpen={isRegistrationModalOpen}
                onClose={()=>setRegistrationModalOpen(false)}
                onConfirm={()=>console.log("submit 완료")}
            >
                <WorkplaceModal />
            </ModalContainer>

            {/* 편집 모달 */}
            <ModalContainer
                title="사업장 수정"
                isOpen={isEditModalOpen}
                onClose={()=>setEditModalOpen(false)}
                onConfirm={()=>console.log("나중에 submit 할 것")}
            >
                <WorkplaceModal mode='edit' workplaceData={selectedWorkplace} />
            </ModalContainer>

            {/* 삭제 모달 추가  */}
            <ModalContainer
                isOpen={isDeleteModalOpen}
                onClose={()=>setDeleteModalOpen(false)}
                onConfirm={()=>console.log("삭제 !!!")}
            >
                <DeleteConfirmModal/>
            </ModalContainer>

       </div>
   );
}

