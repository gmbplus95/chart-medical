import './App.css';
import React from "react";
import Header from "./layout/Header";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <MainLayout>
        <Header>
            <h1 className='text-[72px] text-center py-[20px]'>CÀN KHÔN</h1>
        </Header>
        <section className='body bg-[#f1f1f1]'>
            <div className='flex flex-col sm:flex-row'>
                <div className='py-[150px] px-[20px] xl:px-[150px] w-full sm:w-1/2'>
                    <h2 className='text-left text-[40px] pb-[10px]'>VỀ CHÚNG TÔI</h2>
                    <div className='text-left text-[18px] leading-[32px]'>
                        <p>Ứng dụng chia sẻ nội dung, kết nối bạn bè bốn phương.</p>
                        <p>- Cộng đồng</p>
                        <p>Đăng tải, tìm kiếm những kiến thức, những thắc mắc mà bạn muốn tìm ra câu trả lời.</p>
                        <p>Đóng góp kiến thức bằng việc trả lời những câu hỏi.</p>
                        <p>- Kết nối:</p>
                        <p>Kết nối, giao lưu với những người bạn từ khắp mọi nơi.</p>
                        <p>Video call, chat dễ dàng</p>
                        <p className='mt-[20px]'>Còn chờ gì nữa, tham gia ngay nào !</p>
                    </div>
                    <div id="comp-l5gfk7xh" className="mt-[20px]">
                        <a
                           href="https://play.google.com/store/apps/details?id=com.learn.cankhon" target="_blank"
                           rel="noreferrer noopener" className="xQ_iF">
                        <img src="https://static.wixstatic.com/media/21a5ea_cc46cc7ec27a455baea915d3a9bac2e8~mv2.png/v1/fill/w_766,h_296,al_c,lg_1,q_85,enc_auto/21a5ea_cc46cc7ec27a455baea915d3a9bac2e8~mv2.png" alt="" style={{width: 383, height: 148, objectFit: 'cover', objectPosition: '50% 50%'}} />
                        </a>
                        </div>
                </div>
                <div className='w-full sm:w-1/2'>
                    <img src="https://static.wixstatic.com/media/11062b_0e28dc60acb34648b315bff732553f1a~mv2.jpg/v1/fill/w_1680,h_1586,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/11062b_0e28dc60acb34648b315bff732553f1a~mv2.jpg" alt="Nhóm sinh viên Châu Á thảo luận trong thư viện" style={{width: 840, height: 793, objectFit: 'cover', objectPosition: '50% 50%'}} />
                </div>
            </div>
            <div className='py-[80px]'>
                <h3 className='text-[22px]'>"Big results require big ambitions"</h3>
                    <h4 className='mt-[10px] font-[500]'>Heraclitus</h4>
            </div>
        </section>
        <section className='contact'>
            <div className='w-[1060px] mx-auto py-[120px]'>
                <div className='flex flex-col sm:flex-row'>
                    <div className='w-1/2 text-left px-[20px] sm:px-[15px]'>
                        <h3 className='text-[40px]'>LIÊN HỆ CHÚNG TÔI</h3>
                        <div>
                            <p className='mt-[5px]'>CUBEE SOFTWARE COMPANY LIMITED</p>
                            <p className='mt-[10px]'>Số 43, đường Xuân Canh, xã Xuân Canh, Huyện Đông Anh, Thành phố Hà Nội</p>
                            <p className='py-[20px]'>sugiacankhon@cankhon.vn</p>
                            <p>093-4687-930</p>
                        </div>
                    </div>
                    <div className='w-1/2 mt-[20px] sm:mt-[0] px-[20px] sm:px-[0]'>
                        <div className='flex gap-[8px]'>
                            <input type="text" className='w-1/2' placeholder='Tên'/>
                            <input type="text" className='w-1/2' placeholder='Email'/>
                        </div>
                        <div className='flex gap-[8px] mt-[10px]'>
                            <input type="text" className='w-1/2' placeholder='Điện thoại'/>
                            <input type="text" className='w-1/2' placeholder='Địa chỉ'/>
                        </div>
                        <div className='flex mt-[10px]'>
                            <input type="text" className='w-full' placeholder='Tiêu đề'/>
                        </div>
                        <div className='flex mt-[10px] w-full'>
                            <textarea className='w-full' placeholder='Nhập tin nhắn của bạn ở đây...'/>
                        </div>
                        <div className='flex mt-[16px] w-full'>
                            <button className='w-full text-center py-[12px] bg-[#000] text-white hover:opacity-[0.6]'>Gửi</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='footer'>
            <div className='flex flex-col text-center py-[20px] bg-[#e1eff2]'>
                <div>
                    CUBEE SOFTWARE COMPANY LIMITED
                </div>
                <div className='mt-[20px]'>
                    <p>Ngày hoạt động: 26/07/2022</p>
                    <p>Giấy phép kinh doanh: 0110071959</p>
                </div>
            </div>
        </section>
    </MainLayout>
  );
}

export default App;
