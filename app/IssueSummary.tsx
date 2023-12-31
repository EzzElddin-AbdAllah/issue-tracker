import { Status } from "@prisma/client";
import { Card, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

interface Props {
	open: number;
	inProgress: number;
	closed: number;
}

const IssueSummary = ({ open, inProgress, closed }: Props) => {
	const containers: {
		label: string;
		value: number;
		status: Status;
		color: string;
	}[] = [
		{
			label: "Open Issues",
			value: open,
			status: "OPEN",
			color: "var(--red-a4)",
		},
		{
			label: "In-Progress Issues",
			value: inProgress,
			status: "IN_PROGRESS",
			color: "var(--orange-a4)",
		},
		{
			label: "Closed Issues",
			value: closed,
			status: "CLOSED",
			color: "var(--green-a4)",
		},
	];

	return (
		<Flex justify="between" gap="1">
			{containers.map((container) => (
				<Card
					key={container.label}
					style={{ backgroundColor: container.color }}
				>
					<Flex direction="column" gap="1">
						<Link
							className="text-sm font-medium"
							href={`/issues/list?status=${container.status}`}
						>
							{container.label}
						</Link>
						<Text size="5" className="font-bold">
							{container.value}
						</Text>
					</Flex>
				</Card>
			))}
		</Flex>
	);
};

export default IssueSummary;
