import clsx from 'clsx';
import React, { useEffect, useState } from 'react'
import { UserApi } from '../../api/UserApi';
import { IComment } from '../../interfaces/Comment';
import { Button } from '../Button';
import { Comment } from '../Comment';
import { Dialog } from '../Dialog';


import styles from './ProductPage.module.scss';

export const Comments = ({ comments: comm, product }) => {
  const [comments, setComments] = useState<{ data: IComment[], loaded: number }>({ data: comm.slice(0, 4), loaded: 4 });
  const [message, setMessage] = useState('')
  const [openDialog, setOpenDialog] = useState(false)

  const handleLoadMoreComments = (loadCount: number) => {
    setComments({
      data: [...comments.data, ...comm.slice(comments.loaded, comments.loaded + loadCount)],
      loaded: comments.loaded + loadCount
    });
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('productIdproductId', +e.target.productId.value);
    const { comment, message } = await UserApi().comment(+e.target.productId.value, e.target.description.value);
    if (comment) {
      setComments({ data: [...comments.data, comment as IComment], loaded: comments.loaded + 1 });
    }
    setMessage(message);
    setOpenDialog(true);
  }


  return (
    <section className={styles.comments}>
      {
        openDialog &&
        <Dialog
          id='comment_popup'
          isOpen={openDialog}
          onClose={() => setOpenDialog(!openDialog)}
          title={'Уведомление'}
        >

          <div className={styles.dialogChoose}>
            <div className={styles.dialogChoose__wrapper}>

              <b style={{ color: '#EF3F3F', textAlign: 'center', lineHeight: '24px' }}>
                {message}
              </b>

            </div>
            <Button
              type="filled"
              className={clsx(styles.content__button, styles.dialogChoose__button)}
              clickHandler={() => setOpenDialog(false)}>
              Хорошо
            </Button>
          </div>

        </Dialog>
      }
      <div className="container">
        <h2 className={styles.comments__title}>Комментарии <span>({comments.data.length})</span></h2>
        {
          comments.data.length === 0 &&
          <h3 className={styles.comments__titleSpecial}>
            У этого товара ещё нет отзывов. Скорее, покупай и пиши отзыв первым!
            </h3>
        }
        <div className={styles.comments__wrapper}>
          {
            comments.data.length !== 0 &&
            comments.data.map((c, i) => {
              return <Comment
                id={c.id}
                description={c.description}
                userImage={c.userImage || '/static/profile_img.png'}
                created_at={c.created_at}
                userName={c.userName}
                key={Math.random() + i}
              />
            })
          }
        </div>
        {
          comm.length > comments.loaded &&
          <Button className={styles.comments__button} clickHandler={() => handleLoadMoreComments(4)}>
            Больше комментариев
          </Button>
        }

        <form className={styles.comments__sender} onSubmit={handleSubmit}>
          <h4>Ваш комментарий</h4>
          <textarea name="description" placeholder="Введите ваш комментария..."></textarea>
          <input type="hidden" name="productId" value={product.id}></input>
          <div className={styles.comments__senderBottom}>
            {/* Captcha */}
            <div className="captacha"></div>
            <Button type="filled" typeSend="submit">Отправить</Button>
          </div>
        </form>
      </div>
    </section>
  )
}
