import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import springClient from '@/lib/springClient';

export async function POST(request) {
    try {
      const {
        storeName,
        businessNumber,
        accountNumber,
        bankCode,
        location,
        latitude,
        longitude,
        } = await request.json();

      const response = await springClient.post(`/user/store`, {
        storeName,
        businessNumber,
        accountNumber,
        bankCode,
        location,
        latitude,
        longitude,
       });

      // 성공 응답 반환
      return NextResponse.json({ success: true });
    } catch (error) {
      console.error('Spring Boot 직원 추가 실패:', error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }