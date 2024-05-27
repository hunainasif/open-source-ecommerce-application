import React from 'react'
import styles from "./users.module.css"
import { Delete, People, Search, Visibility } from '@mui/icons-material'
import Link from 'next/link'
export default function Users() {
  return (
    <div className={styles.users}>
      
       
        <div className={styles.searchContainer}>
          <div className={styles.top}>
 
          <h1 className={styles.searchHeading}>Search A  User</h1>
          
            </div>
          <div className={styles.bottom}>
            <input className={styles.searchText} type="text" name="" placeholder='Search any User By Name' id="" />
          <Search className={styles.searchIcon}/>
          </div>
      </div>
       <div className={styles.container}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>090078601</td>
              <td>JohnDoe</td>
              <td>user@test.gmail.com</td>
              <td className={styles.actions}>
              <Delete className={styles.actionDelete}/>
              <Link href={`/admin/users/${123}`} className={styles.actionView}>

              <Visibility />
              </Link>
              </td>
            </tr>
            <tr>
              <td>090078601</td>
              <td>JohnDoe</td>
              <td>user@test.gmail.com</td>
              <td>
              <Delete className={styles.actionDelete}/>
              <Visibility className={styles.actionView}/>
              </td>
            </tr>
            <tr>
              <td>090078601</td>
              <td>JohnDoe</td>
              <td>user@test.gmail.com</td>
              <td>
              <Delete className={styles.actionDelete}/>
              <Visibility className={styles.actionView}/>
              </td>
            </tr>
            <tr>
              <td>090078601</td>
              <td>JohnDoe</td>
              <td>user@test.gmail.com</td>
              <td>
              <Delete className={styles.actionDelete}/>
              <Visibility className={styles.actionView}/>
              </td>
            </tr>
            <tr>
              <td>090078601</td>
              <td>JohnDoe</td>
              <td>user@test.gmail.com</td>
              <td>
              <Delete className={styles.actionDelete}/>
              <Visibility className={styles.actionView}/>
              </td>
            </tr>
            <tr>
              <td>090078601</td>
              <td>JohnDoe</td>
              <td>user@test.gmail.com</td>
              <td>
              <Delete className={styles.actionDelete}/>
              <Visibility className={styles.actionView}/>
              </td>
            </tr>
            <tr>
              <td>090078601</td>
              <td>JohnDoe</td>
              <td>user@test.gmail.com</td>
              <td>
              <Delete className={styles.actionDelete}/>
              <Visibility className={styles.actionView}/>
              </td>
            </tr>
            <tr>
              <td>090078601</td>
              <td>JohnDoe</td>
              <td>user@test.gmail.com</td>
              <td>
              <Delete className={styles.actionDelete}/>
              <Visibility className={styles.actionView}/>
              </td>
            </tr>
            <tr>
              <td>090078601</td>
              <td>JohnDoe</td>
              <td>user@test.gmail.com</td>
              <td>
              <Delete className={styles.actionDelete}/>
              <Visibility className={styles.actionView}/>
              </td>
            </tr>
            <tr>
              <td>090078601</td>
              <td>JohnDoe</td>
              <td>user@test.gmail.com</td>
              <td>
              <Delete className={styles.actionDelete}/>
              <Visibility className={styles.actionView}/>
              </td>
            </tr>
            <tr>
              <td>090078601</td>
              <td>JohnDoe</td>
              <td>user@test.gmail.com</td>
              <td>
              <Delete className={styles.actionDelete}/>
              <Visibility className={styles.actionView}/>
              </td>
            </tr>
            <tr>
              <td>090078601</td>
              <td>JohnDoe</td>
              <td>user@test.gmail.com</td>
              <td>
              <Delete className={styles.actionDelete}/>
              <Visibility className={styles.actionView}/>
              </td>
            </tr>
            <tr>
              <td>090078601</td>
              <td>JohnDoe</td>
              <td>user@test.gmail.com</td>
              <td>
              <Delete className={styles.actionDelete}/>
              <Visibility className={styles.actionView}/>
              </td>
            </tr>
            <tr>
              <td>090078601</td>
              <td>JohnDoe</td>
              <td>user@test.gmail.com</td>
              <td>
              <Delete className={styles.actionDelete}/>
              <Visibility className={styles.actionView}/>
              </td>
            </tr>
            <tr>
              <td>090078601</td>
              <td>JohnDoe</td>
              <td>user@test.gmail.com</td>
              <td>
              <Delete className={styles.actionDelete}/>
              <Visibility className={styles.actionView}/>
              </td>
            </tr>
            <tr>
              <td>090078601</td>
              <td>JohnDoe</td>
              <td>user@test.gmail.com</td>
              <td>
              <Delete className={styles.actionDelete}/>
              <Visibility className={styles.actionView}/>
              </td>
            </tr>
            <tr>
              <td>090078601</td>
              <td>JohnDoe</td>
              <td>user@test.gmail.com</td>
              <td>
              <Delete className={styles.actionDelete}/>
              <Visibility className={styles.actionView}/>
              </td>
            </tr>
            <tr>
              <td>090078601</td>
              <td>JohnDoe</td>
              <td>user@test.gmail.com</td>
              <td>
              <Delete className={styles.actionDelete}/>
              <Visibility className={styles.actionView}/>
              </td>
            </tr>
            <tr>
              <td>090078601</td>
              <td>JohnDoe</td>
              <td>user@test.gmail.com</td>
              <td>
              <Delete className={styles.actionDelete}/>
              <Visibility className={styles.actionView}/>
              </td>
            </tr>
            <tr>
              <td>090078601</td>
              <td>JohnDoe</td>
              <td>user@test.gmail.com</td>
              <td>
              <Delete className={styles.actionDelete}/>
              <Visibility className={styles.actionView}/>
              </td>
            </tr>
            <tr>
              <td>090078601</td>
              <td>JohnDoe</td>
              <td>user@test.gmail.com</td>
              <td>
              <Delete className={styles.actionDelete}/>
              <Visibility className={styles.actionView}/>
              </td>
            </tr>
            <tr>
              <td>090078601</td>
              <td>JohnDoe</td>
              <td>user@test.gmail.com</td>
              <td>
              <Delete className={styles.actionDelete}/>
              <Visibility className={styles.actionView}/>
              </td>
            </tr>
            <tr>
              <td>090078601</td>
              <td>JohnDoe</td>
              <td>user@test.gmail.com</td>
              <td>
              <Delete className={styles.actionDelete}/>
              <Visibility className={styles.actionView}/>
              </td>
            </tr>
            <tr>
              <td>090078601</td>
              <td>JohnDoe</td>
              <td>user@test.gmail.com</td>
              <td>
              <Delete className={styles.actionDelete}/>
              <Visibility className={styles.actionView}/>
              </td>
            </tr>
            <tr>
              <td>090078601</td>
              <td>JohnDoe</td>
              <td>user@test.gmail.com</td>
              <td>
              <Delete className={styles.actionDelete}/>
              <Visibility className={styles.actionView}/>
              </td>
            </tr>
            <tr>
              <td>090078601</td>
              <td>JohnDoe</td>
              <td>user@test.gmail.com</td>
              <td>
              <Delete className={styles.actionDelete}/>
              <Visibility className={styles.actionView}/>
              </td>
            </tr>
            <tr>
              <td>090078601</td>
              <td>JohnDoe</td>
              <td>user@test.gmail.com</td>
              <td>
              <Delete className={styles.actionDelete}/>
              <Visibility className={styles.actionView}/>
              </td>
            </tr>
            <tr>
              <td>090078601</td>
              <td>JohnDoe</td>
              <td>user@test.gmail.com</td>
              <td>
              <Delete className={styles.actionDelete}/>
              <Visibility className={styles.actionView}/>
              </td>
            </tr>
            <tr>
              <td>090078601</td>
              <td>JohnDoe</td>
              <td>user@test.gmail.com</td>
              <td>
              <Delete className={styles.actionDelete}/>
              <Visibility className={styles.actionView}/>
              </td>
            </tr>
            <tr>
              <td>090078601</td>
              <td>JohnDoe</td>
              <td>user@test.gmail.com</td>
              <td>
              <Delete className={styles.actionDelete}/>
              <Visibility className={styles.actionView}/>
              </td>
            </tr>
            <tr>
              <td>090078601</td>
              <td>JohnDoe</td>
              <td>user@test.gmail.com</td>
              <td>
              <Delete className={styles.actionDelete}/>
              <Visibility className={styles.actionView}/>
              </td>
            </tr>
            <tr>
              <td>090078601</td>
              <td>JohnDoe</td>
              <td>user@test.gmail.com</td>
              <td>
              <Delete className={styles.actionDelete}/>
              <Visibility className={styles.actionView}/>
              </td>
            </tr>
          </tbody>
        </table>
       </div>
    </div>
    
  )
}
