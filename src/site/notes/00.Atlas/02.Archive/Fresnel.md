---
{"dg-publish":true,"permalink":"/00-atlas/02-archive/fresnel/","tags":["셰이더_Shader","프레넬_Fresnel","빛_Light","반사_Reflect"]}
---

## Why
- 프로젝트를 하다가 물셰이더를 만들일이 있었는데 제작하는 도중 프레넬이라는 개념을 알게되어 정리한다.

## Fresnel 프레넬 이란?
- 많은 물셰이더는 **프레넬**이라는 공식을 이용해서 빛의 굴절을 표현한다.
- 프레넬이란 모든 빛은 매질(media)에 따라 반사, 흡수, 굴절을 하게 되는데 이 프레넬 공식을 통해 빛의 움직을 계산한다.
- 이를 사용하면 물체의 가장자리 빛이 더 강하게 반사되는 현상을 표현할 수 있다.
### 골절률 (Refactive index)
- 빛이 특정 매질을 통과해서 이동할때 얼마나 **느려지는지** 비율을 측정한 것이다.
- 빛이 느려지면 이동 방향이 바뀌게 된다.
- 빛은 여러 파장이 합쳐서 보이게 되는데 이런 파장에 따라 골절률이 달라진다.
- 그렇기에 파장별로 골절률 계산을 해야한다.
![image](https://github.com/user-attachments/assets/8bfec418-635f-4c14-bb49-23067c2b2d10)

---
### 스넬의 법칙(Snell's law)
- 매질에 따라 빛이 꺾이는 것을 알 수 있는 공식이다.
![image|200](https://github.com/user-attachments/assets/abc4be5e-62bf-4f95-b6aa-797076eb0a9f)

---
- v 는 속도 (velocity)
- λ는 파장 (wavelength)
- n은 골절률 (IOR)
- 이런 관계를 설명한 것이 스넬의 법칙이다.
![image](https://github.com/user-attachments/assets/e9bb11eb-7e95-471a-b074-a88950b44b0c)

---
- 그래서 물과 기름이 만나면 아래처럼 파장이 변화한다.
![image](https://github.com/user-attachments/assets/6ffce623-64b5-4330-a11c-12f371b6b900)

---
### 매질이 반사할수도 있다.
- 굴절률이 다른 매질을 만나게되면 특정 각도에서 굴절이 아니라 완전히 **반사**하는 경우가 있다.
- Critical angle처럼 특정 각도를 넘어가면 전반사가 발생한다.
![image](https://github.com/user-attachments/assets/0d33de0e-adad-403d-b55d-2e6193c57e6f)

---
### 전반사 각도 구하기 공식
- 대기의 굴절률이 1이고 아크릴의 굴절률이 1.5면 전반사 각은 41.8이 된다.
![image](https://github.com/user-attachments/assets/8f69a657-2cc3-4871-b42f-c8a925b3d7dd)
![image](https://github.com/user-attachments/assets/7a908200-6b73-4062-bc31-ea4148acd85a)

---
### 프레넬 공식 (Fresnel equation)
- 그래픽스에서 반사와 굴절을 계산하기 위해서 반사되는 빛의 양과 얼마나 빛이 굴절되는지 알아야한다.
- 그 공식이 프레넬 공식인데 유도식은 너무 어려워서 패스
	-  프레넬 공식은 스넬의 법칙, [반사 법칙](https://en.wikipedia.org/wiki/Law_of_reflection) 등을 이용해서 유도된다
- 일반적으로 컴퓨터 그래픽스에서는 **Schlick's approximation**을 사용한다. 근사계산 공식이다.
	- 모든 각도에서의 굴절률(IOR)을 알 수 없기 때문에 근사계산을 해야한다.
![image](https://github.com/user-attachments/assets/7ea1103a-3294-4a98-ad21-01cf79fdfe96)

#### 그래프
- 프레넬 공식을 그래프와 시키면 다음과 같다.
- 가로축 : 시선과 노멀벡터의 각도
- 세로축 : 반사율
- 수평(90도)일 수록 높은 반사율을 보인다.
![image](https://github.com/user-attachments/assets/f7b49942-a550-4f9d-aa8f-f392c247e2f5)

---
- 일반적으로 물체를 수직에서 바라본(0도) 반사율 값을 넣는 근사 계산식을 사용한다.
- R0값이 그래프에서의 0도의 반사율 값이라 보면된다.
- 대부분의 엔진에서는 F0이라고 표현한다(Fresnel at Degree 0 도 인듯 하다.)
- 아래는 대기속에 있다고 가정할때의 식이다.
![image](https://github.com/user-attachments/assets/99a0abe5-c784-4a51-99a7-a34cb82bcb05)
- 물의 경우 1.33의 굴절률을 가진다.
	- [매질의 굴절률 리스트](https://pixelandpoly.com/ior.html)
- **일반적으로 이 F0 를 "Metallic" 핀에다가 넣어 주시면 됩니다**
![image](https://github.com/user-attachments/assets/899e8591-f5fb-49fe-bad0-a1f1e36ca3db)




---
## Reference
#### 출처(참고문헌)
- https://lifeisforu.tistory.com/384

#### 질문 & 확장
- 

#### 연결 문서
- [[20.Efforts/29.Projects/언리얼 물셰이더 만들기\|언리얼 물셰이더 만들기]] - 물셰이더를 만들때 대부분 프레넬공식을 이용해 만든다.