import { useNavigate } from 'react-router';
import './App.css';
import Footer from 'rc-footer';
import 'rc-footer/assets/index.css'; // import 'rc-footer/asssets/index.less';
import { render } from 'react-dom';
import Typewritter from 'typewriter-effect';
import Logo from './logo.png';
import Pricing1 from './pricing1.png';
import Pricing2 from './pricing2.png';
import Pricing3 from './pricing3.png';
import Pricing4 from './pricing4.png';
import Github from './github.png';
import Linkedin from './linkedin.png';
import Facebook from './facebook.png';
import Twitter from './twitter.png';
import HomeLogo from './home.png';
import { Card, Button, Container, Box } from 'antd';
import { Col, Divider, Row } from 'antd';

export default function Home() {

  const navigate = useNavigate()
  const style = { background: '#0092ff', padding: '8px 0' };

  return (
    <>
    <Card className='page'>
    <div className='sudut-kiri-atas'></div>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify='end' style={{ marginTop: '20px' }}>
      <Col span={12}>
        <img src={HomeLogo} style={{ width: '40px', height: '40px', float: 'left', marginLeft: '-100px', color: 'white'}} />
        <h3 style={{ float: 'left', marginTop: '8px', color: 'white' }}>Home</h3>
      </Col>
      <Col span={2}>
        <a href='#about' style={{ fontWeight: 'bold', cursor: 'pointer', paddingTop: '12px', color: 'black' }}>ABOUT</a>
      </Col>
      <Col span={2}>
        <a href='#pricing' style={{ fontWeight: 'bold', cursor: 'pointer', paddingTop: '12px', color: 'black' }}>PRICING</a>
      </Col>
      <Col span={2}>
        <a href='#contact' style={{ fontWeight: 'bold', cursor: 'pointer', paddingTop: '12px', color: 'black' }}>CONTACT</a>
      </Col>
      <Col span={2} style={{ marginRight: '90px' }}>
        <Button onClick={() => navigate('/login')}  style={{ width: '150px', fontSize: '12px', border: '1px solid #00d4ff', color: '#00d4ff' }}>LOGIN</Button>
      </Col>
    </Row>

    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify='end'  style={{ marginTop: '100px', marginRight: '250px', fontFamily: '"Combo", cursive' }}>
        <Col xs={{ span: 20 }} sm={{ span: 16 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }}>
          <div>
            Selamat datang di dalam website ini yang akan menampilkan kepada anda <br />
            semoga anda puas di dalam menjalankan bisnis dengan kami
          </div>
        </Col>
      </Row>

      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify='start'  style={{ marginTop: '100px', marginRight: '250px' }}>
        <Col xs={{ span: 20 }} sm={{ span: 16 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }}>
          <div>
           <Typewritter
             options={{
                strings: [' Anda dapat memahami prosedur bisnis dengan baik secara struktur dan akurat'],
                autoStart: true,
                loop: true,
            }}
            />
          </div>
        </Col>
      </Row>

      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify='start'  style={{ marginTop: '100px', marginRight: '250px' }}>
        <Col xs={{ span: 20 }} sm={{ span: 16 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }}>
          <img src={Logo} style={{ width: '200px', height: '150px' }} />
        </Col>
      </Row>
      <div className='sudut-kanan-bawah'></div>
      </Card>

      <Card id='about' style={{ background: 'rgb(2,0,36', marginTop: '100px' }}>
      <h2 style={{ borderBottom: '1px solid white', color: 'white', textAlign: 'center'}}>About</h2>
      <p style={{ color: 'white', textAlign: 'center' }}> 
        Pengenalan dalam bisnis ini, merupakan bentuk baik dari kami untuk semakin dapat memperlihatkan bentuk <br />
        hal yang seharusnya kami lakukan untuk para client yang sangat kami banggakan di masa mendatang yang akan <br />
        bergabung bersama kami secara menyeluruh di manapun berada dan bagaimana sikap kepada kami.
       </p>
      </Card>

      <Card id='pricing' style={{ background: 'rgb(2,0,36', marginTop: '250px' }}>
      <h2 style={{ borderBottom: '1px solid white', color: 'white', textAlign: 'center'}}>Pricing</h2>
      <div style={{ color: 'white', display: 'flex', justifyContent: 'space-between' }}> 
        <Card style={{ height: '300px', width: '300px' }}>
          <img src={Pricing1} style={{ width: '100%', height: '100px' }}/>
          <h3>Software Pengembangan SDM</h3>
          <h3>Rp 500.000</h3>
        </Card>

        <Card style={{ height: '300px', width: '300px' }}>
          <img src={Pricing2} style={{ width: '100%', height: '100px' }}/>
          <h3>Software Pengembangan finance</h3>
          <h3>Rp 700.000</h3>
        </Card>

        <Card style={{ height: '300px', width: '300px' }}>
          <img src={Pricing3} style={{ width: '100%', height: '100px' }}/>
          <h3>Software Service Car</h3>
          <h3>Rp 1.500.000</h3>
        </Card>

        <Card style={{ height: '300px', width: '300px' }}>
          <img src={Pricing4} style={{ width: '100%', height: '100px' }}/>
          <h3>Software Keamanan</h3>
          <h3>Rp 5.000.000</h3>
        </Card>
       </div>
     </Card>

        <div id='contact'>
            <Footer
            style={{ marginTop: '250px' }}
            columns={[
            {
                icon: (
                <img src={Github} />
                ),
                title: 'github',
                url: 'https://yuque.com',
                description: '知识创作与分享工具',
                openExternal: true,
            },
            {
                icon: (
                    <img src={Linkedin} />
                    ),
                    title: 'Linkedin',
                    url: 'https://yuque.com',
                    description: '知识创作与分享工具',
                    openExternal: true,
            },
            {
                icon: (
                    <img src={Twitter} />
                    ),
                    title: 'Twitter',
                    url: 'https://yuque.com',
                    description: '知识创作与分享工具',
                    openExternal: true,
            },
            {
                icon: (
                    <img src={Facebook} />
                    ),
                    title: 'Facebook',
                    url: 'https://yuque.com',
                    description: '知识创作与分享工具',
                    openExternal: true,
            },
            ]}
            bottom="Made with ❤️ by Michael"
        />
        </div>
  </>
  );
}

