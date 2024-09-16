- Tối ưu source code
- Tối ưu render
- Tối ưu load trang
- Tối ưu build: so sánh
- Tối ưu quản lý trạng thái

- Phân chia module hợp lý: Tách biệt các chức năng của ứng dụng thành các module rõ ràng như components, hooks, services, utils, v.v.
- Giảm thiểu mức độ lồng ghép: Tránh các component lồng nhau quá sâu, giúp cho code dễ đọc và dễ bảo trì.
- Sử dụng React.memo: Dùng React.memo cho các component không cần re-render nếu props không thay đổi.
- useCallback và useMemo: Dùng useCallback để memoize các hàm callback và useMemo để ghi nhớ giá trị đã tính toán, giúp tránh render lại không cần thiết.
- Tránh inline functions: Tránh định nghĩa hàm trực tiếp trong JSX, vì nó tạo hàm mới mỗi khi component render
- Quản lý trạng thái hiệu quả (redux, zustand, …)
- Code splitting: Sử dụng React.lazy và Suspense để lazy load các component, giúp giảm kích thước gói ban đầu.
- Virtual DOM updates: Tránh render lại không cần thiết bằng cách kiểm soát tốt việc cập nhật state và props.
- Debouncing và Throttling: Áp dụng cho các sự kiện nhập liệu hoặc cuộn trang để giảm tải API gọi liên tục.
- Pagination và Infinite Scrolling: Phân trang hoặc cuộn vô tận thay vì tải toàn bộ dữ liệu một lần.
- TailwindCSS: Nếu bạn đang dùng TailwindCSS, đảm bảo chỉ sử dụng các utility classes cần thiết và kích hoạt purge để loại bỏ CSS không dùng.
- CSS Modules: Tránh xung đột lớp CSS bằng cách sử dụng CSS Modules.
- Kiểm tra và loại bỏ các thư viện không cần thiết hoặc quá lớn ảnh hưởng đến kích thước bundle.
- Sử dụng các thư viện nhẹ hơn nếu có thể.
- Linting và Formatting: Sử dụng các công cụ như ESLint và Prettier để giữ cho code luôn sạch sẽ và dễ đọc.
- Kiểm tra hiệu suất: Sử dụng các công cụ như Lighthouse, React DevTools để kiểm tra hiệu suất và phát hiện điểm nghẽn.

 