import React from "react";
import BlogPost from "./BlogPost";
import person1 from "../assets/images/person_1.jpg";
import person2 from "../assets/images/person_2.jpg";
import person3 from "../assets/images/person_3.jpg";

function Blog() {
  const posts = [
    {
      id: 1,
      author: {
        name: "Av. Mehmet Yılmaz",
        role: "Ceza Hukuku Uzmanı",
        image: person1,
      },
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, architecto ducimus ab accusamus expedita maxime consequatur facilis totam? Enim aut minima ex eius, possimus molestias, similique quo voluptates optio odio non. Ex qui dolores est! Accusantium aliquid, exercitationem consectetur ipsum, vero laboriosam tenetur earum ratione quod possimus laborum voluptates vel error distinctio inventore voluptatem perspiciatis! Laudantium, recusandae aspernatur. Iste perferendis recusandae dolorum at numquam nam quam est voluptates rem. Possimus odit deserunt soluta minus expedita odio, magnam et quis dicta distinctio architecto quae quidem iusto ducimus praesentium repellat ullam, laborum aperiam eveniet iure sint. Sit facere facilis similique modi molestiae illo dolore illum, magnam eum, corporis iure, labore ex earum repellendus aliquam commodi? Ex hic, dignissimos sequi cumque voluptates veniam ea architecto quia aspernatur, unde aut fuga eos fugit molestiae asperiores tempora blanditiis, accusantium nihil! Reprehenderit nisi ad ea magnam quaerat, quam minus debitis dicta obcaecati pariatur tempora eligendi consequatur illum commodi aliquam rerum illo impedit a quae eos consequuntur, architecto corporis cum. Minus officia id accusamus itaque quos, tempora vero magni quibusdam quidem hic autem magnam minima labore dignissimos officiis dolorum et quisquam illo explicabo, molestias molestiae expedita libero perferendis. Cumque modi, deserunt quaerat vitae repellendus eligendi dicta ea.",
    },
    {
      id: 2,
      author: {
        name: "Av. Murat Korkmaz",
        role: "Ticaret Hukuku Uzmanı",
        image: person2,
      },
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, architecto ducimus ab accusamus expedita maxime consequatur facilis totam? Enim aut minima ex eius, possimus molestias, similique quo voluptates optio odio non. Ex qui dolores est! Accusantium aliquid, exercitationem consectetur ipsum, vero laboriosam tenetur earum ratione quod possimus laborum voluptates vel error distinctio inventore voluptatem perspiciatis! Laudantium, recusandae aspernatur. Iste perferendis recusandae dolorum at numquam nam quam est voluptates rem. Possimus odit deserunt soluta minus expedita odio, magnam et quis dicta distinctio architecto quae quidem iusto ducimus praesentium repellat ullam, laborum aperiam eveniet iure sint. Sit facere facilis similique modi molestiae illo dolore illum, magnam eum, corporis iure, labore ex earum repellendus aliquam commodi? Ex hic, dignissimos sequi cumque voluptates veniam ea architecto quia aspernatur, unde aut fuga eos fugit molestiae asperiores tempora blanditiis, accusantium nihil! Reprehenderit nisi ad ea magnam quaerat, quam minus debitis dicta obcaecati pariatur tempora eligendi consequatur illum commodi aliquam rerum illo impedit a quae eos consequuntur, architecto corporis cum. Minus officia id accusamus itaque quos, tempora vero magni quibusdam quidem hic autem magnam minima labore dignissimos officiis dolorum et quisquam illo explicabo, molestias molestiae expedita libero perferendis. Cumque modi, deserunt quaerat vitae repellendus eligendi dicta ea.",
    },
    {
      id: 3,
      author: {
        name: "Av. İsmail Çetin",
        role: "Aile Hukuku Uzmanı",
        image: person3,
      },
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, architecto ducimus ab accusamus expedita maxime consequatur facilis totam? Enim aut minima ex eius, possimus molestias, similique quo voluptates optio odio non. Ex qui dolores est! Accusantium aliquid, exercitationem consectetur ipsum, vero laboriosam tenetur earum ratione quod possimus laborum voluptates vel error distinctio inventore voluptatem perspiciatis! Laudantium, recusandae aspernatur. Iste perferendis recusandae dolorum at numquam nam quam est voluptates rem. Possimus odit deserunt soluta minus expedita odio, magnam et quis dicta distinctio architecto quae quidem iusto ducimus praesentium repellat ullam, laborum aperiam eveniet iure sint. Sit facere facilis similique modi molestiae illo dolore illum, magnam eum, corporis iure, labore ex earum repellendus aliquam commodi? Ex hic, dignissimos sequi cumque voluptates veniam ea architecto quia aspernatur, unde aut fuga eos fugit molestiae asperiores tempora blanditiis, accusantium nihil! Reprehenderit nisi ad ea magnam quaerat, quam minus debitis dicta obcaecati pariatur tempora eligendi consequatur illum commodi aliquam rerum illo impedit a quae eos consequuntur, architecto corporis cum. Minus officia id accusamus itaque quos, tempora vero magni quibusdam quidem hic autem magnam minima labore dignissimos officiis dolorum et quisquam illo explicabo, molestias molestiae expedita libero perferendis. Cumque modi, deserunt quaerat vitae repellendus eligendi dicta ea.",
    },
  ];

  return (
    <div>
      {posts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Blog;
