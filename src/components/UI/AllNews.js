import { Card, Col, Row } from "antd";
import { CommentOutlined, ProfileOutlined, CalendarOutlined, ArrowRightOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";

const AllNews = ({ allNews }) => {
  const { Meta } = Card;
  console.log("AllNews", allNews);
  return (
    <>
      <h3
        style={{
          textAlign: "center",
          fontSize: "50px",
          margin: "30px 0px",
        }}
      >
        #TODAY HIGHLIGHTS
      </h3>

      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {allNews.map((news) => (
          <Col key={news.id} className='gutter-row' span={6}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<Image src={news.image_url} alt='' width={500} height={200} layout='responsive' />}
            >
              <Meta title={news.title} />

              <div
                className='line'
                style={{
                  height: "5px",
                  width: "100%",
                  backgroundColor: "#000000",
                  margin: "20px 0px",
                }}
              ></div>
              <p>{news.description.slice(0, 65)}...</p>
              <p
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  color: "gray",
                  margin: "10px 0px",
                  fontSize: "10px",
                }}
              >
                <span>
                  <CalendarOutlined /> {news.release_date}
                </span>
                <span>
                  <CommentOutlined /> {news.comment_count}
                </span>
                <span>
                  <ProfileOutlined /> {news.author}
                </span>
              </p>
              <Link href={`/news/${news.id}`}>
                <p
                  style={{
                    fontSize: "20px",
                    margin: "20px 0px",
                    backgroundColor: "black",
                    color: "white",
                    width: "168px",
                    padding: "2px 5px ",
                    fontWeight: "300",
                    letterSpacing: "3px",
                  }}
                >
                  Keep Reading <ArrowRightOutlined />
                </p>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default AllNews;
