import React, { useState } from 'react'
import './HTML5Form.css'

function HTML5Form(props) {
  const [fields, setFields] = useState({
    username: '',
    password: '',
    confirmPassword: '', // 有可能只會在瀏覽器檢查用(資料庫不會記)
    email: '',
  })

  const [fieldErrors, setFieldErrors] = useState({
    username: '',
    password: '',
    confirmPassword: '', // 有可能只會在瀏覽器檢查用(資料庫不會記)
    email: '',
  })

  const handleFieldChange = (e) => {
    // 1. 從原本的狀態物件上拷貝出一個新物件
    // 2. 在拷貝的新物件上處理

    // "合併"原有物件值的語法
    const newData = { ...fields, [e.target.name]: e.target.value }

    // 3. 設定回狀態
    setFields(newData)
  }

  const handleSubmit = (e) => {
    // 阻擋form的預設送出行為
    e.preventDefault()

    // 作驗証
    const formData = new FormData(e.target)
    console.log(formData.get('username'))
    console.log(formData.get('email'))
    console.log(formData.get('password'))

    // 獲取同名稱的checkbox
    //console.log(formData.getAll('likeList'))

    // 作客製化驗證
    if (formData.get('password') !== formData.get('confirmPassword')) {
      // 設定錯誤訊息
      const updateFieldErrors = {
        ...fieldErrors,
        password: '密碼與確認密碼欄位輸入值不相同',
        confirmPassword: '密碼與確認密碼欄位輸入值不相同',
      }
    }

    // 驗証成功，用fetch或ajax送到伺服器
  }

  const handleInvalid = (e) => {
    // 阻擋form的預設送出行為(錯誤泡泡訊息)
    e.preventDefault()

    const updatedFieldErrors = {
      ...fieldErrors,
      [e.target.name]: e.target.validationMessage,
    }

    // 3. 設定回錯誤訊息狀態
    setFieldErrors(updatedFieldErrors)
  }

  // 當整個表單有更動時會觸發
  // 認定使用者輸入某個欄位(更正某個有錯誤的欄位)
  // 清空某個欄位錯誤訊息
  const handleFormChange = (e) => {
    const updatedFieldErrors = {
      ...fieldErrors,
      [e.target.name]: '',
    }

    // 3. 設定回錯誤訊息狀態
    setFieldErrors(updatedFieldErrors)
  }

  return (
    <>
      <h1>HTML5 表單驗証</h1>
      <form
        onSubmit={handleSubmit}
        onChange={handleFormChange}
        onInvalid={handleInvalid}
      >
        <label>帳號</label>
        <input
          type="text"
          value={fields.username}
          name="username"
          onChange={handleFieldChange}
          required
        />
        {/* 表單驗證，錯誤訊息顯示 */}
        {fieldErrors.username !== '' && (
          <div className="error">{fieldErrors.username}</div>
        )}
        <br />
        <label>Email</label>
        <input
          type="email"
          value={fields.email}
          name="email"
          onChange={handleFieldChange}
          required
        />
        {/* 表單驗證，錯誤訊息顯示 */}
        {fieldErrors.email !== '' && (
          <div className="error">{fieldErrors.email}</div>
        )}
        <br />
        <label>密碼</label>
        <input
          type="text"
          value={fields.password}
          name="password"
          onChange={handleFieldChange}
          required
          minLength="6"
        />
        {/* 表單驗證，錯誤訊息顯示 */}
        {fieldErrors.password !== '' && (
          <div className="error">{fieldErrors.password}</div>
        )}
        <br />
        <label>確認密碼</label>
        <input
          type="text"
          value={fields.password}
          name="confirmPassword"
          onChange={handleFieldChange}
          required
          minLength="6"
        />
        {/* 表單驗證，錯誤訊息顯示 */}
        {fieldErrors.password !== '' && (
          <div className="error">{fieldErrors.password}</div>
        )}
        <br />
        <button type="submit">提交</button>
      </form>
    </>
  )
}

export default HTML5Form
