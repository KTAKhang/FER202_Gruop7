import anh1 from "../asset/images/Nguyen/den_hung.jpg"
import anh2 from "../asset/images/Nguyen/dinh_co_binh_thuy.jpg"
import anh3 from  "../asset/images/Nguyen/ben_ninh_kieu.jpg"
import anh4 from "../asset/images/Nguyen/thien_vien_truc_lam.jpg"
import anh5 from "../asset/images/Nguyen/cho_noi_cai_rang.jpg"
import anh6 from "../asset/images/Nguyen/du_lich_ong_de.jpg"

const destinations = [
    {
        id: 1,
        name: "Đền Hùng",
        address: "Quận Bình Thủy, Cần Thơ, Vietnam",
        description: "Đền Hùng là một công trình kiến trúc văn hóa tâm linh, nơi thờ cúng các vua Hùng và là điểm đến thu hút nhiều du khách.",
        image: anh1,
        rating: 5,
        promotions: [
            {
                description: "Giỗ Hùng Vương",
                startDate: "2025-04-07",
                endDate: "2025-04-08"
            }
        ]
    },
    {
        id: 2,
        name: "Đình Cổ Bình Thủy",
        address: "Quận Bình Thủy, Cần Thơ, Vietnam",
        description: "Đình Cổ Bình Thủy là một di tích lịch sử văn hóa, nổi tiếng với kiến trúc cổ kính và giá trị lịch sử.",
        image: anh2,
        rating: 5,
        promotions: [
            {
                description: "Lễ Kỳ Yên Thượng Đình",
                startDate: "2025-05-10",
                endDate: "2025-05-12"
            }
        ]
    },
    {
        id: 3,
        name: "Bến Ninh Kiều",
        address: "Quận Ninh Kiều, Cần Thơ, Vietnam",
        description: "Bến Ninh Kiều là một điểm đến nổi tiếng với cảnh quan đẹp và không khí trong lành, là nơi lý tưởng để thư giãn và ngắm cảnh.",
        image: anh3,
        rating: 4,
        promotions: [

        ]
    },
    {
        id: 4,
        name: "Thiền Viện Trúc Lâm",
        address: "Quận Cái Răng, Cần Thơ, Vietnam",
        description: "Thiền Viện Trúc Lâm là một ngôi chùa nổi tiếng với không gian yên bình và kiến trúc đẹp mắt, là nơi lý tưởng để tìm kiếm sự thanh tịnh.",
        image: anh4,
        rating: 4,
        promotions: [

        ]
    },
    {
        id: 5,
        name: "Chợ Nổi Cái Răng",
        address: "Quận Cái Răng, Cần Thơ, Vietnam",
        description: "Chợ Nổi Cái Răng là một trong những chợ nổi lớn nhất ở miền Tây, nổi tiếng với các hoạt động mua bán trên sông.",
        image: anh5,
        rating: 5,
        promotions: [
            {
                description: "Giảm 15% dịch vụ tham quan chợ nổi",
                startDate: "2024-10-20",
                endDate: "2024-11-20"
            }
        ]
    },
    {
        id: 6,
        name: "Du lịch Ông Đề",
        address: "Quận Phong Điền, Cần Thơ, Vietnam",
        description: "Khu du lịch Ông Đề là một điểm đến hấp dẫn với nhiều hoạt động vui chơi giải trí và cảnh quan thiên nhiên đẹp.",
        image: anh6,
        rating: 4,
        promotions: [
            {
                description: "Lễ hội trái cây và bánh dân gian",
                startDate: "2024-11-01",
                endDate: "2024-11-30"
            }
        ]
    }
];

export default destinations;
