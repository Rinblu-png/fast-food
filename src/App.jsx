
import React from 'react'
import Layout from './components/Layout'
import Card from "./CradComponents/Card"; 

const App = () => {
  return (
   <Layout>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4 md:p-8 mx-auto max-w-7xl">
        <Card
          image="https://images.pexels.com/photos/2725744/pexels-photo-2725744.jpeg?_gl=1*14eltjy*_ga*MTg2OTU2NTI4My4xNzYxNTM3ODYx*_ga_8JE65Q40S6*czE3NjI4NzA4MTgkbzQkZzEkdDE3NjI4NzA4NjgkajEwJGwwJGgw"
          name="ชุดอิ่มตาย"
          role="450 บาท"
        />
        <Card
          image="https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?_gl=1*1c7pr57*_ga*MTg2OTU2NTI4My4xNzYxNTM3ODYx*_ga_8JE65Q40S6*czE3NjI4NzA4MTgkbzQkZzEkdDE3NjI4NzA5NTckajQ1JGwwJGgw"
          name="เฟรนฟราย"
          role="79 บาท"
        />
        <Card
          image="https://images.pexels.com/photos/580612/pexels-photo-580612.jpeg?_gl=1*1x9s2cn*_ga*MTg2OTU2NTI4My4xNzYxNTM3ODYx*_ga_8JE65Q40S6*czE3NjI4NzA4MTgkbzQkZzEkdDE3NjI4NzEwMjEkajQ5JGwwJGgw"
          name="เบอเกอร์"
          role="90 บาท"
        />
         <Card
          image="https://images.pexels.com/photos/2619970/pexels-photo-2619970.jpeg?_gl=1*3ip9k6*_ga*MTg2OTU2NTI4My4xNzYxNTM3ODYx*_ga_8JE65Q40S6*czE3NjI4NzA4MTgkbzQkZzEkdDE3NjI4NzEwNjgkajIkbDAkaDA."
          name="พิชชา"
          role="259 บาท"
        />
         <Card
          image="https://images.pexels.com/photos/4113618/pexels-photo-4113618.jpeg?_gl=1*17eejf8*_ga*MTg2OTU2NTI4My4xNzYxNTM3ODYx*_ga_8JE65Q40S6*czE3NjI4NzA4MTgkbzQkZzEkdDE3NjI4NzEzNDMkajU5JGwwJGg"
          name="cola"
          role="20 บาท"
        />
         <Card
          image="https://images.pexels.com/photos/8217303/pexels-photo-8217303.jpeg?_gl=1*nce8f6*_ga*MTg2OTU2NTI4My4xNzYxNTM3ODYx*_ga_8JE65Q40S6*czE3NjI4NzA4MTgkbzQkZzEkdDE3NjI4NzI3ODQkajM2JGwwJGgw"
          name="น้ำเปล่า"
          role="10 บาท"
        />

      </div>
   </Layout>
  )
}

export default App