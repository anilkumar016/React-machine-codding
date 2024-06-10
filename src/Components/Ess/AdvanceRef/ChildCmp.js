import React from 'react'
import InnerChild from './InnerChild'
function ChildCmp() {
  return (
    <div>
        <InnerChild>
        <p>This is the first item.</p>
        <p>This is the second item.</p>
        <p>This is the third item.</p>
        <h1>This is the third item.</h1>
        <h1>This is the third item.</h1>
        <h1>This is the third item.</h1>
        <h1>This is the third item.</h1>
        </InnerChild>
    </div>
  )
}

export default ChildCmp