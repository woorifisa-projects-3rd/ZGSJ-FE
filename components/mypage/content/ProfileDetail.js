// PageProfileDetail.js
'use client'
import DefaultTable from '@/components/table/DefaultTable';
import classes from './ProfileDetail.module.css';

export default function ProfileDetail({content}) {
    const name =content.name;
    const email =content.email;
    const workplaceInfo =content.workplaceInfo;
    
   return (
       <div className={classes.container}>
           <div className={classes.headerSection}>
               <h2 className={classes.title}>{name} 사장님</h2>
               <div className={classes.email}>{email}</div>
           </div>
                
            {/* 다른 컴포넌트 적용해야함 */}
           <div className={classes.otherComponent}>여기는 다른 컴포넌트</div>

           <DefaultTable tableName={tableName} tableHeaders={tableHeaders} list={workplaceInfo}/>

            <div className={classes.addButtonContainer}>
                   <button className={classes.addButton}>
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
       </div>
   );
}

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