import React, { Component } from 'react'
import Carousel from 'react-grid-carousel'

import "../../styles/home.css";
class Test extends Component {
    render() {
        return (
          <div className="container">
            <Carousel cols={4} rows={1} gap={10} loop
            responsiveLayout={[
              { breakpoint: 1000, cols: 3 },
              { breakpoint: 750, autoplay:1000, loop: true },
              { breakpoint: 499, autoplay: 1000, loop: true }
            ]}
            >
            <Carousel.Item>
              <img width="100%" src="https://s3-alpha-sig.figma.com/img/7460/b3fe/aeb7ba1b98b125438ae2783f72d2cd28?Expires=1607299200&Signature=PSCt0KTNmvLGUoZ49eIjova06poJe4K7cbiiIoOnRcRPd5qyeMXp2apKV42rKtYXmK6K39t24tfcKlX5Z0vLN2vrmxJHGpMQWEA6221-l0Ikuy0x2jWH2P35~vaI8Nhyns6G438LFSabxpzHt5r4aAv9~JbhtMobF9tqOcTmgq4t-pZxpumLZ7Uc2Y5QUld4zp3MLCxUNdFEH5Orc5tJjG56XebRDVSKjuGxuGMwqCTrW7hhZVAYRaQeJDUWps9XS5a2Zjiy4fKOoB4LDC5CGZtrsjPwAkpRNtA29hp~f6lVmLwv4gJB7E32HdaAPNII00iWH1Oy434dfeqgfrO-Og__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="https://s3-alpha-sig.figma.com/img/dfda/9423/a2b9a2264fde7ca54e9e48fe9abac812?Expires=1607299200&Signature=L03XlPOd86nC3x62SMM8n40xpiv51~G1CEA0w6~R6HVjlZbnHQdiruBh4waEiHj2cdCRUtY7BhyMALiFC8pf-LrkddyyI-sGA5tHMn9BwDHRyL8a1MiOVFnzcJjDlv8wWUUkyEduPo23Vxuybci4gz7iuNR24qvW-7No~uUIB9utUecA3hfUNDNaaiWDFy4hteOZnPSDrjhe8o22xzpKev4Ck8pIO3DtYdz11rvc3evfbQGC8tJEwGABpouEmtZhGfWhD~2Unwz3Yo1Zugc4g5V8WhqZHbeo-LflY0IOmLTCs0MV9juZubXmYqLMX29FIo-l~cBRKqp7QzpD05filg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"  alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="https://s3-alpha-sig.figma.com/img/4ede/f1d2/17c6ec2b69ee48e5f11b32d611a89f67?Expires=1607299200&Signature=gmsrN0xzCjoVW0TPU0J1sG4UMWRiKEgeeLveyiXGFFaxlCYlpKSLUmyC9IYlQXVJUmI8hFfVHHdWG4tQCKyqApDH5NT0UWBBoi6ACgiqry9UOkZLlvkuqgDHuOJF-pTcTvm6~0uSxvRSMd8scqTvReI1GB7IcATeoI2FqFqhQ6BYgROGd8AKyaBxW5Nv1hZQ6T0YD53uXQYmEM4J0x6zjwyeDQ3vMugPzgJv6ugEX2-cGRTCJGy2Ud6SLFium0lgUzORV-PjzHvEtAuBxGfTyY3Vx08b~S~I0~BWVLis2PDJWKYW3u8SyVEKDUhC44BcnS5EwLTUL6S21f95gmLprw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="https://s3-alpha-sig.figma.com/img/1b5e/b306/6bf75d4aa29a63c8e2a82fb8e2e71448?Expires=1607299200&Signature=acqBl-tlx54Vs1QVLQHHaN-jjMuIql7x81fSxrNN88jACsO9tB5DFt2WaNQjYR4mMzxq~x7nSQEgb7gRXPAxWTMC-67DyVpcgTR-2t0LWwzK4hFCVyszoOL0nejRSNb0Nd4YfH5-VQcXWr60UJgfILYZhwLH856OXwiNdv7uygl3a9ZhAaqFiO6QrLnVZhtjgpSHKBuU7VPNIgZnYyStkYRihz1hrgtr82DZxw1-fJkPYRdyyKTh3qnJiGRysyB09c7DMj-FNW7s6Dp4MP3rJXSy5FeTyBozAWfoNRpR68zBvYfTAgUHeODyKGhVi1hQzhV-MnZzEkRVxJrtLaE-yA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="https://s3-alpha-sig.figma.com/img/7460/b3fe/aeb7ba1b98b125438ae2783f72d2cd28?Expires=1607299200&Signature=PSCt0KTNmvLGUoZ49eIjova06poJe4K7cbiiIoOnRcRPd5qyeMXp2apKV42rKtYXmK6K39t24tfcKlX5Z0vLN2vrmxJHGpMQWEA6221-l0Ikuy0x2jWH2P35~vaI8Nhyns6G438LFSabxpzHt5r4aAv9~JbhtMobF9tqOcTmgq4t-pZxpumLZ7Uc2Y5QUld4zp3MLCxUNdFEH5Orc5tJjG56XebRDVSKjuGxuGMwqCTrW7hhZVAYRaQeJDUWps9XS5a2Zjiy4fKOoB4LDC5CGZtrsjPwAkpRNtA29hp~f6lVmLwv4gJB7E32HdaAPNII00iWH1Oy434dfeqgfrO-Og__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="https://s3-alpha-sig.figma.com/img/dfda/9423/a2b9a2264fde7ca54e9e48fe9abac812?Expires=1607299200&Signature=L03XlPOd86nC3x62SMM8n40xpiv51~G1CEA0w6~R6HVjlZbnHQdiruBh4waEiHj2cdCRUtY7BhyMALiFC8pf-LrkddyyI-sGA5tHMn9BwDHRyL8a1MiOVFnzcJjDlv8wWUUkyEduPo23Vxuybci4gz7iuNR24qvW-7No~uUIB9utUecA3hfUNDNaaiWDFy4hteOZnPSDrjhe8o22xzpKev4Ck8pIO3DtYdz11rvc3evfbQGC8tJEwGABpouEmtZhGfWhD~2Unwz3Yo1Zugc4g5V8WhqZHbeo-LflY0IOmLTCs0MV9juZubXmYqLMX29FIo-l~cBRKqp7QzpD05filg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"  alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="https://s3-alpha-sig.figma.com/img/4ede/f1d2/17c6ec2b69ee48e5f11b32d611a89f67?Expires=1607299200&Signature=gmsrN0xzCjoVW0TPU0J1sG4UMWRiKEgeeLveyiXGFFaxlCYlpKSLUmyC9IYlQXVJUmI8hFfVHHdWG4tQCKyqApDH5NT0UWBBoi6ACgiqry9UOkZLlvkuqgDHuOJF-pTcTvm6~0uSxvRSMd8scqTvReI1GB7IcATeoI2FqFqhQ6BYgROGd8AKyaBxW5Nv1hZQ6T0YD53uXQYmEM4J0x6zjwyeDQ3vMugPzgJv6ugEX2-cGRTCJGy2Ud6SLFium0lgUzORV-PjzHvEtAuBxGfTyY3Vx08b~S~I0~BWVLis2PDJWKYW3u8SyVEKDUhC44BcnS5EwLTUL6S21f95gmLprw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="https://s3-alpha-sig.figma.com/img/1b5e/b306/6bf75d4aa29a63c8e2a82fb8e2e71448?Expires=1607299200&Signature=acqBl-tlx54Vs1QVLQHHaN-jjMuIql7x81fSxrNN88jACsO9tB5DFt2WaNQjYR4mMzxq~x7nSQEgb7gRXPAxWTMC-67DyVpcgTR-2t0LWwzK4hFCVyszoOL0nejRSNb0Nd4YfH5-VQcXWr60UJgfILYZhwLH856OXwiNdv7uygl3a9ZhAaqFiO6QrLnVZhtjgpSHKBuU7VPNIgZnYyStkYRihz1hrgtr82DZxw1-fJkPYRdyyKTh3qnJiGRysyB09c7DMj-FNW7s6Dp4MP3rJXSy5FeTyBozAWfoNRpR68zBvYfTAgUHeODyKGhVi1hQzhV-MnZzEkRVxJrtLaE-yA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" />
            </Carousel.Item>
            
            
            
            
            {/* ... */}
          </Carousel>
          </div>
        )
        
    }
}

export default Test;
