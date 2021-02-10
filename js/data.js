/*
총기 종류
1 기관단총
2 돌격소총
3 산탄총
4 저격소총

총기
11 R-99
12 볼트
13 얼터네이터
21 R-301
22 플랫라인
23 헴록
24 G7 스카우트
31 EVA-8
32 마스티프
41 트리플 테이크
42 롱보우
43 센티넬

옵션
11 R-99 - 총신 안정기, 개머리판, 확장 탄창, 디지털 스레트, 경량 탄약 보충
1 3 5 6 9
12 볼트 - 총신 안정기, 개머리판, 확장 탄창, 디지털 스레트, 에너지 탄약 보충
1 3 5 6 11
13 얼터네이터 - 총신 안정기, 개머리판, 확장 탄창, 디지털 스레트, 경량 탄약 보충
1 3 5 6 9
21 R-301 - 총신 안정기, 개머리판, 확장 탄창, 3배율 스코프, 경량 탄약 보충, 앤빌 리시버
1 3 5 7 9 14
22 플랫라인 - 개머리판, 확장 탄창, 3배율 스코프, 중량 탄약 보충, 앤빌 리시버
3 5 7 10 14
23 헴록 - 총신 안정기, 개머리판, 확장 탄창, 3배율 스코프, 중량 탄약 보충
1 3 5 7 10
24 G7 스카우트 - 총신 안정기, 개머리판, 확장 탄창, 3배율 스코프, 경량 탄약 보충, 더블탭 트리거
1 3 5 7 9 15
31 EVA-8 - 샷건 볼트, 디지털 스레트, 산탄총 탄약 보충, 더블탭 트리거
2 6 12 15
32 마스티프 - 샷건 볼트, 디지털 스레트, 산탄총 탄약 보충
2 6 12
41 트리플 테이크 - 저격총 전용 개머리판, 확장 탄창, 6배율 스코프, 저격총 탄약 보충, 초크 활성화
4 5 8 13 16
42 롱보우 - 저격총 전용 개머리판, 확장 탄창, 6배율 스코프, 저격총 탄약 보충
4 5 8 13
43 센티넬 - 저격총 전용 개머리판, 확장 탄창, 6배율 스코프, 저격총 탄약 보충, 실드 셀 증폭 활성화
4 5 8 13 17

옵션 정보
1 - 총신 안정기 (+ 10000원)
2 - 샷건 볼트 (+ 8000원)
3 - 개머리판 (+ 11000원)
4 - 저격총 전용 개머리판 (+ 16000원)
5 - 확장 탄창 (+ 20000원)
6 - 디지털 스레트 (+ 30000원)
7 - 3배율 스코프 (+ 15000원)
8 - 6배율 스코프 (+ 25000원)
9 - 경량 탄약 보충 (+ 9000원)
10 - 중량 탄약 보충 (+ 12000원)
11 - 에너지 탄약 보충 (+ 10000원)
12 - 산탄총 탄약 보충 (+ 9000원)
13 - 저격총 탄약 보충 (+ 14000원)
14 - 앤빌 리시버 (+ 5000원)
15 - 더블탭 트리거 (+ 4000원)
16 - 초크 활성화 (+ 7000원)
17 - 실드 셀 증폭 활성화 (+ 5000원)
*/

class Item {
  constructor (_name, _price, _stock) {
    this.name = _name
    this.price = _price
    this.stock = _stock
  }
}

let gunType = new Map()
gunType.set(1, [11, 12, 13])
gunType.set(2, [21, 22, 23, 24])
gunType.set(3, [31, 32])
gunType.set(4, [41, 42, 43])

let guns = new Map()
guns.set(11, new Item('R-99', 10000, 3))
guns.set(12, new Item('볼트', 10000, 3))
guns.set(13, new Item('얼터네이터', 10000, 3))
guns.set(21, new Item('R-301', 10000, 3))
guns.set(22, new Item('플랫라인', 10000, 3))
guns.set(23, new Item('헴록', 10000, 3))
guns.set(24, new Item('G7 스카우트', 10000, 3))
guns.set(31, new Item('EVA-8', 10000, 3))
guns.set(32, new Item('마스티프', 10000, 3))
guns.set(41, new Item('트리플 테이크', 10000, 3))
guns.set(42, new Item('롱보우', 10000, 3))
guns.set(43, new Item('센티넬', 10000, 3))

let attachType = new Map()
attachType.set(11, [1, 3, 5, 6, 9])
attachType.set(12, [1, 3, 5, 6, 11])
attachType.set(13, [1, 3, 5, 6, 9])
attachType.set(21, [1, 3, 5, 7, 9, 14])
attachType.set(22, [3, 5, 7, 10, 14])
attachType.set(23, [1, 3, 5, 7, 10])
attachType.set(24, [1, 3, 5, 7, 9, 15])
attachType.set(31, [2, 6, 12, 15])
attachType.set(32, [2, 6, 12])
attachType.set(41, [4, 5, 8, 13, 16])
attachType.set(42, [4, 5, 8, 13])
attachType.set(43, [4, 5, 8, 13, 17])

let attaches = new Map()
attaches.set(1, new Item('총신 안정기', 10000, 3))
attaches.set(2, new Item('샷건 볼트', 8000, 2))
attaches.set(3, new Item('개머리판', 10000, 3))
attaches.set(4, new Item('저격총 전용 개머리판', 10000, 3))
attaches.set(5, new Item('확장 탄창', 10000, 3))
attaches.set(6, new Item('디지털 스레트', 10000, 3))
attaches.set(7, new Item('3배율 스코프', 10000, 3))
attaches.set(8, new Item('6배율 스코프', 10000, 3))
attaches.set(9, new Item('경량 탄약 보충', 10000, 3))
attaches.set(10, new Item('중량 탄약 보충', 10000, 3))
attaches.set(11, new Item('에너지 탄약 보충', 10000, 3))
attaches.set(12, new Item('산탄총 탄약 보충', 10000, 3))
attaches.set(13, new Item('저격총 탄약 보충', 10000, 3))
attaches.set(14, new Item('앤빌 리시버', 10000, 3))
attaches.set(15, new Item('더블탭 트리거', 10000, 3))
attaches.set(16, new Item('초크 활성화', 10000, 3))
attaches.set(17, new Item('실드 셀 증폭 활성화', 10000, 3))
