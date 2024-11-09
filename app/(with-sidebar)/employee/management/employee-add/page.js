"use client";

// components/EmployeeForm.jsx
import { useState } from 'react';
import styles from './page.module.css';

export default function EmployeeForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        birthDate: '',
        sex: true,
        phoneNumber: '',
        employmentType: true,
        bankCode: '',
        accountNumber: '',
        salary: '',
        paymentDate: '',
        address: '',
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };


    return (
        <div className={styles.formContainer}>
            <h2 className={styles.formTitle}>직원 추가</h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label>직원 이름</label>
                    <input
                        type="text"
                        placeholder="ex) 홍길동"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>이메일</label>
                    <input
                        type="email"
                        placeholder="example@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>전화번호</label>
                    <input
                        type="tel"
                        placeholder="010-1111-1111"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                    />
                </div>

                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                        <label>성별</label>
                        <select
                            value={formData.sex}
                            onChange={(e) => setFormData({...formData, sex: e.target.value})}
                        >
                            <option value="true">남자</option>
                            <option value="false">여자</option>
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <label>생년월일</label>
                        <input
                            type="date"
                            value={formData.birthDate}
                            onChange={(e) => setFormData({...formData, birthDate: e.target.value})}
                        />
                    </div>
                </div>

                <div className={styles.formGroup}>
                </div>

                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                        <label>고용 형태</label>
                        <select
                            value={formData.employmentType}
                            onChange={(e) => setFormData({...formData, employmentType: e.target.value})}
                        >
                            <option value="true">시급</option>
                            <option value="false">월급</option>
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <label>금액</label>
                        <div className={styles.inputWithUnit}>
                            <input
                                type="number"
                                value={formData.salary}
                                onChange={(e) => setFormData({...formData, salary:parseInt(e.target.value)})}
                            />
                            <span>원</span>
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label>급여날짜</label>
                        <input
                            type="number"
                            min="1"
                            max="28"
                            value={formData.paymentDate}
                            onChange={(e) => {
                                const value = parseInt(e.target.value);
                                if (value >= 1 && value <= 28) {
                                    setFormData({...formData, paymentDate: value})
                                }
                            }}
                        />
                    </div>
                </div>

                {/* 계좌 정보 섹션 추가 */}
                <div className={styles.formSection}>
                    <h3 className={styles.sectionTitle}>계좌 정보</h3>
                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label>은행 선택</label>
                            <select
                                value={formData.bankCode}
                                onChange={(e) => setFormData({...formData, bankCode: e.target.value})}
                            >
                                <option value="">은행을 선택하세요</option>
                                <option value="KB">국민은행</option>
                                <option value="shinhan">신한은행</option>
                                <option value="woori">우리은행</option>
                                <option value="hana">하나은행</option>
                                <option value="nh">농협은행</option>
                                <option value="ibk">기업은행</option>
                                <option value="kakao">카카오뱅크</option>
                            </select>
                        </div>
                        <div className={styles.formGroup}>
                            <label>계좌번호</label>
                            <input
                                type="text"
                                placeholder="'-' 없이 입력해주세요"
                                value={formData.accountNumber}
                                onChange={(e) => setFormData({...formData, accountNumber: e.target.value})}
                            />
                        </div>
                    </div>
                </div>

                {/* 주소 섹션 추가 */}
                {/* <div className={styles.formSection}>
                    <h3 className={styles.sectionTitle}>주소</h3>
                    <div className={styles.formGroup}>
                        <div className={styles.postcodeRow}>
                            <input
                                type="text"
                                placeholder="우편번호"
                                value={formData.postcode}
                                readOnly
                                className={styles.postcodeInput}
                            />
                            <button type="button" className={styles.searchButton}>
                                우편번호 찾기
                            </button>
                        </div>
                    </div>
                    <div className={styles.formGroup}>
                        <input
                            type="text"
                            placeholder="기본주소"
                            value={formData.address}
                            readOnly
                            className={styles.addressInput}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <input
                            type="text"
                            placeholder="상세주소를 입력해주세요"
                            value={formData.detailAddress}
                            onChange={(e) => setFormData({...formData, detailAddress: e.target.value})}
                            className={styles.addressInput}
                        />
                    </div>
                </div> */}

                <div className={styles.formSection}>
                    <h3 className={styles.sectionTitle}>주소</h3>
                    <div className={styles.formGroup}>
                        <input
                            type="text"
                            placeholder="주소를 입력해주세요"
                            value={formData.address}
                            onChange={(e) => setFormData({...formData, address: e.target.value})}
                            className={styles.addressInput}
                        />
                    </div>
                </div>

                <button type="submit" className={styles.submitButton} >추가</button>
            </form>
        </div>
    );
}