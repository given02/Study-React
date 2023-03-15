// 함수표현식

interface HelloProps {
    name?: string; // ? = 선택적 속성 적용
    color: string;
    isSpecial: boolean;
}

{/** 파라미터 기본값 설정 */}
const Hello = ({color, name="이름없음", isSpecial} : HelloProps) => {
    return (
        <div style={{ color }}>
            { isSpecial ? <b>*</b> : null } {/**조건부랜더링*/}
            안녕하세요 {name}
        </div>
    );
};

export default Hello;