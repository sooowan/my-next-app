// lib/fetcher.ts

//@ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default fetcher;

// 화살표함수 한줄 표현식일때 return 및 {} 생략가능, 여려줄인 {return..} 사용할때 자동 개행되어 ts-ignore를 두번 선언해 주어야 한다.
// //@ts-ignore
// const fetcher = (...args) =>
// 	//@ts-ignore
// 	fetch(...args).then((res) => {
// 		return res.json();
// 	});
// export default fetcher;
