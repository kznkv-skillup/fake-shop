import React from 'react'

type TitleProps = {
    title: string
    text: string
    num: number
}

const Title = (props: TitleProps) => {
    console.log(props)
    return (
        <>
            <h1>
                {props.text} {props.title}
            </h1>
            <div>{props.num}</div>
        </>
    )
}

const List = () => {
    let a = 10
    return (
        <>
            <ul>
                <li>list item {a + 1}</li>
                <li>list item 2</li>
                <li>list item 3</li>
            </ul>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
                quod suscipit voluptas sequi tempore debitis totam esse corrupti
                harum id quisquam, deleniti, dolores cupiditate quaerat
                voluptates nulla nam, ullam repudiandae!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quis
                molestiae eaque libero sunt illo accusamus asperiores, facere,
                iste laborum, nam neque fuga blanditiis doloribus aliquam
                repellendus. Laudantium, reiciendis magnam.
            </p>
        </>
    )
}

function App() {
    return (
        <div className="App">
            <Title title="App.js" text="Hi" num={15} />
            <Title title="Test.js" text="Hello" num={25} />
            <List />
        </div>
    )
}

export default App
