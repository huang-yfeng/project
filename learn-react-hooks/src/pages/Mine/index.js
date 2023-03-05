import React, { useEffect } from 'react'
import { connect } from "react-redux"
import { user_add } from "../../action/userAction"
import {Button} from "antd"
function MineIndex(props) {
    console.log(props, 'props');
    useEffect(() => {
        const params = { name: '测试1', id: 1 }
        props.user_add(params)
    }, [])

    return (
        <div>
            <Button type={'primary'}>MineIndex</Button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    ...state
})

const mapDispatchToProps = {
    user_add
}

export default connect(mapStateToProps, mapDispatchToProps)(MineIndex)
