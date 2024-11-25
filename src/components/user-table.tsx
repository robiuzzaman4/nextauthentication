import { db } from "@/db";
import { Table } from "@radix-ui/themes";
import Card from "./card";

export default function UserTable() {
  return (
    <Card>
      <Table.Root variant="surface" className="tracking-tighter">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell className="whitespace-nowrap px-3">
              Name
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="whitespace-nowrap px-3">
              Email
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="whitespace-nowrap px-3">
              Role
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {db.users.map((user) => (
            <Table.Row key={user.id}>
              <Table.RowHeaderCell className="whitespace-nowrap px-3">
                {user.name}
              </Table.RowHeaderCell>
              <Table.Cell className="whitespace-nowrap px-3">
                {user.email}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap px-3">
                {user.role}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
      <p className="text-sm text-center text-gray-500 tracking-tighter">
        Only admin can see all users.
      </p>
    </Card>
  );
}
