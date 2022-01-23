import React, { useState, useEffect } from 'react'
//import rawData from '../data/users.json'
import './UserList.css'

function UserList(props) {
  const [loading, setLoading] = useState(false)
  // 記錄用(向伺服器要的原始資料)
  const [users, setUsers] = useState([])

  // 呈現用/過濾用
  const [usersDisplay, setUsersDisplay] = useState([])

  const [keyword, setKeyword] = useState('')

  // 從伺服器載入資料
  const fetchUser = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    setUsers(data)
    setUsersDisplay(data)
  }

  // 搜尋改成伺服器端
  const searchUser = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users?name=${keyword}`
    )
    const data = await response.json()
    setUsers(data)
    // setUsersDisplay(data)
  }

  // didMount
  useEffect(() => {
    // 開啟載入指示器
    setLoading(true)

    // 戴入資料
    fetchUser()
  }, [])

  // 搜尋名稱用
  useEffect(() => {
    //keyword至少2字元
    if (keyword.length < 3 && keyword.length !== 0) return

    // 重設整個呈現資料
    if (keyword.length === 0) {
      setLoading(true)
      setUsersDisplay(users)
      return
    }

    // 1.從目前的user狀態拷貝
    // 2.拷貝狀態上面作處理-filter
    const newUsers = users.filter((v, i) => v.name.includes(keyword))

    // 3.設定回狀態
    setLoading(true)
    setUsersDisplay(newUsers)
  }, [keyword, users])

  //x秒後自動關掉spinner(設定loading為false)
  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false)
      }, 1500)
    }
  }, [loading])

  const spinner = (
    <div className="spinner-border text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  )

  const userListTable = (
    <table className="table table-bordered table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {usersDisplay.map((v, i) => {
          return (
            <tr key={v.id}>
              <td>{v.id}</td>
              <td>{v.name}</td>
              <td>{v.email}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )

  return (
    <>
      <div className="container">
        <div className="center flex-column">
          <div class="p-2 flex-fill bd-highlight">
            <label>搜尋Name</label>
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            {/* <button
            onClick={() => {
              // 重設整個呈現資料
              if (keyword === '') {
                setUsersDisplay(users)
                return
              }
              // 1.從目前的user狀態拷貝
              // 2.拷貝狀態上面作處理-filter
              const newUsers = users.filter((v, i) =>
                v.name.includes(keyword)
              )
              // 3.設定回狀態
              setUsersDisplay(newUsers)
            }}
          >
            搜尋Name
          </button> */}
            <hr />
            <button
              onClick={() => {
                // 1.從目前的user狀態拷貝
                // 2.拷貝狀態上面作處理-sort
                const newUsers = [...users].sort((a, b) => a.id - b.id)
                // 3.設定回狀態
                setLoading(true)
                setUsersDisplay(newUsers)
              }}
            >
              排序-id 由小到大
            </button>
            <button
              onClick={() => {
                // 1.從目前的user狀態拷貝
                // 2.拷貝狀態上面作處理-sort
                const newUsers = [...users].sort((a, b) => b.id - a.id)
                // 3.設定回狀態
                setLoading(true)
                setUsersDisplay(newUsers)
              }}
            >
              排序-id 由大到小
            </button>
            <button
              onClick={() => {
                // 1.從目前的user狀態拷貝
                // 2.拷貝狀態上面作處理-sort
                const newUsers = [...users].sort((a, b) => {
                  const nameA = a.name.toUpperCase()
                  const nameB = b.name.toUpperCase()
                  if (nameA < nameB) {
                    return -1
                  }

                  if (nameA > nameB) {
                    return 1
                  }

                  return 0
                })

                // 3.設定回狀態
                setLoading(true)
                setUsersDisplay(newUsers)
              }}
            >
              排序-Name 由a到z
            </button>
            <button
              onClick={() => {
                // 1.從目前的user狀態拷貝
                // 2.拷貝狀態上面作處理-sort
                const newUsers = [...users].sort((a, b) => {
                  const nameA = a.name.toUpperCase()
                  const nameB = b.name.toUpperCase()
                  if (nameA > nameB) {
                    return -1
                  }

                  if (nameA < nameB) {
                    return 1
                  }

                  return 0
                })
                // 3.設定回狀態
                setLoading(true)
                setUsersDisplay(newUsers)
              }}
            >
              排序-Name 由z到a
            </button>
            <hr />
          </div>
          <div class="p-2 flex-fill bd-highlight">
            {loading ? spinner : userListTable}
          </div>
        </div>
      </div>
    </>
  )
}

export default UserList
