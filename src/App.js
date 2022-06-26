import './App.css';

const getYAxis = (y) => {
    // y axis
    // 121 > 180 : 180px
    // 0 > 120: 30px
    // 35 = 50 - 5 - 10, 50 là chiều cao của div pointer, 5 là margin top, 10 là nửa chiều cao pointer
     if (y <= 120) {
         if (y <=100) {
             return -25
         }
         return 30/120 * y - 35
     }
     return 30 + 180/60 * (y - 120) - 35
}

const getXAxis = (x) => {
    // x axis
    // 81 > 110 : 240px
    // 0 > 80: 80px
    // 10 là nửa chiều rộng pointer
    if (x <= 80) {
        return 80/80 * x - 10
    }
    return 80 + 240/30 * (x - 80) - 10
}


const pointer = (x, y) => {
    const yAxis = getYAxis(y)
    const xAxis = getXAxis(x)
    return (
        <div className='z-[11] absolute pointer flex gap-[10px]' style={{
            bottom: `${yAxis}px`,
            left: `${xAxis}px`,
            height: 50
        }}>
            <div className='w-[20px] h-[20px] mt-[5px] rounded-[50%] bg-[#0b2760]' />
            <div className='flex flex-col items-start'>
                <span className='font-bold text-[#0b2760]'>TEXT</span>
                <span className='text-[18px] text-[#7a7a7a]'>{y}/{x} mmHg</span>
            </div>
        </div>
    )
}

function App() {
  return (
    <div className="App">
        <div className='flex pt-[15%] pl-[10%] w-[1024px] mx-auto h-screen bg-[#e4e4e4]'>
            <div className='w-[500px] h-[300px] relative'>
                <div className='z-[10] absolute left-0 bottom-0 h-[30px] w-[80px] bg-[#a9ddee] border border-dashed border-[#fff]'>
                    <span className='absolute left-[-30px] top-[-10px] text-[#aaaaaa]'>120</span>
                    <span className='absolute right-[-10px] bottom-[-20px] text-[#aaaaaa]'>80</span>
                    <span className='absolute left-[10px] text-[12px]'>TEXT</span>
                </div>
                <div className='z-[9] absolute left-0 bottom-0 h-[60px] w-[120px] bg-[#50d5f9] border border-dashed border-[#fff]'>
                    <span className='absolute left-[-30px] top-[-10px] text-[#aaaaaa]'>130</span>
                    <span className='absolute right-[-10px] bottom-[-20px] text-[#aaaaaa]'>85</span>
                    <span className='absolute left-[10px] text-[12px]'>TEXT</span>
                </div>
                <div className='z-[8] absolute left-0 bottom-0 h-[90px] w-[160px] bg-[#eee97c] border border-dashed border-[#fff]'>
                    <span className='absolute left-[-30px] top-[-10px] text-[#aaaaaa]'>140</span>
                    <span className='absolute right-[-10px] bottom-[-20px] text-[#aaaaaa]'>90</span>
                    <span className='absolute left-[10px] text-[12px]'>TEXT</span>
                </div>
                <div className='z-[7] absolute left-0 bottom-0 h-[150px] w-[240px] bg-[#f6cfe8] border border-dashed border-[#fff]'>
                    <span className='absolute left-[-30px] top-[-10px] text-[#aaaaaa]'>160</span>
                    <span className='absolute right-[-10px] bottom-[-20px] text-[#aaaaaa]'>100</span>
                    <span className='absolute left-[10px] text-[12px]'>TEXT</span>
                </div>
                <div className='z-[6] absolute left-0 bottom-0 h-[210px] w-[320px] bg-[#f69292] border border-dashed border-[#fff]'>
                    <span className='absolute left-[-30px] top-[-10px] text-[#aaaaaa]'>180</span>
                    <span className='absolute right-[-10px] bottom-[-20px] text-[#aaaaaa]'>110</span>
                    <span className='absolute left-[10px] text-[12px]'>TEXT</span>
                </div>
                <div className='z-[5] absolute left-0 bottom-0 h-[270px] w-[400px] bg-[#fe73b8] border border-dashed border-[#fff]'>
                    <span className='absolute left-[-50px] top-[-10px] text-[#aaaaaa]'>mmHg</span>
                    <span className='absolute right-[-20px] bottom-[-20px] text-[#aaaaaa]'>mmHg</span>
                    <span className='absolute left-[10px] text-[12px]'>TEXT</span>
                </div>
                {pointer(88,145 )}
            </div>
        </div>
    </div>
  );
}

export default App;
